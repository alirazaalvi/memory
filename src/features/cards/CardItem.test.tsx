import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cards } from '../../data/testData';
import CardItem from './CardItem';
import { Card } from './types';

export const onCardSelected = jest.fn((card: Card) => {
  return card;
});
afterEach(cleanup);

test('it should render', () => {
  const card: Card = cards.cards[0];

  render(
    <CardItem
      card={card}
      matches={new Set(card.code)}
      onCardSelected={onCardSelected}
    />
  );

  expect(screen.getByTestId('card-item')).toBeInTheDocument();
});
