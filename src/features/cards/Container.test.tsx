import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  screen,
  waitFor,
  render,
  fireEvent,
} from '../../testUtils/testingHelper';
import '@testing-library/jest-dom/extend-expect';
import Container from './Container';
import { getBaseUrl } from '../../shared/helpers';
import { cards } from '../../data/testData';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const serverUrl = `${getBaseUrl()}/cards/:pairs`;

test('should render default view', async () => {
  render(<Container />);
  expect(screen.queryByTestId('container')).toBeInTheDocument();
});

test('should render cards', async () => {
  server.use(
    rest.get(serverUrl, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ cards: cards.cards.slice(0, 12) })
      );
    })
  );
  render(<Container />);

  const cardsListNode = await waitFor(() => screen.getAllByTestId('card-item'));

  expect(cardsListNode).toHaveLength(12);
});

test('card flipped on click', async () => {
  server.use(
    rest.get(serverUrl, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ cards: cards.cards.slice(0, 1) }));
    })
  );
  render(<Container />);

  const cardItemNode = await waitFor(() => screen.getAllByTestId('card-blank'));
  fireEvent.click(cardItemNode[0]);

  await (() => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});

test('card found matches on click', async () => {
  const singleCard = cards.cards.slice(0, 1);
  server.use(
    rest.get(serverUrl, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ cards: singleCard.concat(singleCard) })
      );
    })
  );
  render(<Container />);

  const cardItemNode = await waitFor(() => screen.getAllByTestId('card-blank'));
  fireEvent.click(cardItemNode[0]);
  fireEvent.click(cardItemNode[1]);

  await (() => {
    expect(screen.getAllByTestId('card')).toEqual(2);
  });
});

// test('should not able to render the cards if fail to fetch', async() => {
//   server.use(
//     rest.get('http://localhost:3000/cards/:pairs', (req, res, ctx) => {
//       return res(
//         ctx.status(500),
//         ctx.json({}),
//       )
//     }),
//   )

//   render(<Container />);

//   const cardMessageNode = await waitFor(() => screen.getAllByTestId('message'));
//   expect(cardMessageNode).;
// });
