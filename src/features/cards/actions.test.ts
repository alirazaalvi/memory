import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { ActionNames, fetchCards, Actions } from './actions';
import { cards } from '../../data/testData';

const server = setupServer();
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

const mockStore = configureMockStore([thunk]);

const findAction = (store, type: string) => {
  return store.getActions().find((action: Actions) => action.type === type);
};

const getAction = (store, type: string) => {
  const action = findAction(store, type);
  if (action) return Promise.resolve({ type: action.type });

  return new Promise((resolve) =>
    store.subscribe(() => {
      const newAction = findAction(store, type);
      if (newAction) resolve({ type: newAction.type });
    })
  );
};

describe('Card Actions', () => {
  it('returns action of type fetch todos', async () => {
    server.use(
      rest.get('http://localhost:3000/cards/:pairs', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(cards));
      })
    );

    const store = mockStore();
    await store.dispatch<any>(fetchCards(6));

    const executeAction = await getAction(
      store,
      ActionNames.FETCH_CARD_SUCCESS
    );

    expect(executeAction).toEqual({ type: ActionNames.FETCH_CARD_SUCCESS });
  });

  it('returns action of type fetch footer failure', async () => {
    server.use(
      rest.get('http://localhost:3000/cards/:pairs', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      })
    );

    const store = mockStore();
    await store.dispatch<any>(fetchCards(6));

    const executeAction = await getAction(store, ActionNames.FETCH_CARD_ERROR);

    expect(executeAction).toEqual({ type: ActionNames.FETCH_CARD_ERROR });
  });
});
