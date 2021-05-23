import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../shared/store';
import { useReduxDispatch } from '../../shared/helpers';
import { fetchCards } from './actions';
import { Card } from './types';
import { CardContainer } from './CardItem';
import { Header } from './Header';
import Message from './Message';
import './cards.scss';

const Container = () => {
  const [matches, setMatches] = useState(new Set<string>());

  //pulling the cards from the cards reducer
  const cardReducer = useSelector((state: AppState) => state.cardsReducer);
  // Redux dispatch for redux thunk
  const reduxDispatch = useReduxDispatch();

  // making callback for cards dispatch
  const getCards = useCallback(
    () => reduxDispatch(fetchCards(5)),
    [reduxDispatch]
  );

  // Api call on the container load to pull the cards
  useEffect(() => {
    getCards();
  }, [getCards]);

  const cards: Card[] = cardReducer.cards;

  // In case of any activity like loading or error status from api
  // The reducer will return the error message
  const { activityStatusMessage } = cardReducer;

  //Conditional markup which will be displayed if application is fetching the data
  // or there is some other message to show.
  let informationMarkup: JSX.Element | null = null;

  if (activityStatusMessage && cards.length === 0) {
    informationMarkup = <Message message={activityStatusMessage} />;
  }

  let selection = '';
  // A small logical function which will handle the card selection logic
  const onCardSelected = (card: Card): void => {
    // If selection is empty it means this is the first card of the pair
    // So in this case selection variable will get the card code
    if (!selection) {
      selection = card.code;
      return;
    }

    // If matche happens in that case it will be pushed into mathces set
    // Set is used because map or set are faster to lookup for keys as
    // compared to arrays
    const newMatches = new Set<string>(matches);
    if (selection === card.code) {
      newMatches.add(card.code);
    }

    selection = '';
    setMatches(newMatches);
  };

  // It will iterate on the cards list and
  // return the markup to display the cards
  const cardsMarkup = cards.map((card, index) => (
    <CardContainer
      key={`${card.id}-${index}`}
      card={card}
      onCardSelected={onCardSelected}
      matches={matches}
    />
  ));

  return (
    <div data-testid="container" className="container mb-4">
      <Header label="Memory Cardio" />
      {informationMarkup}
      <div className="d-flex flex-wrap">{cardsMarkup}</div>
    </div>
  );
};

export default Container;
