import { useState, useEffect } from 'react';
import { Card } from './types';
import blank from '../../assets/images/blank.png';

export interface OwnProps {
  card: Card;
  matches: Set<string>;
  onCardSelected: (card: Card) => void;
}

export const CardContainer = ({ card, onCardSelected, matches }: OwnProps) => {
  const [isSelected, setIsSetSelected] = useState(false);

  // Clear the selection once the match operation will be happen
  useEffect(() => {
    // Added a timeout to give a effect of comparison happening and
    // giving the user some time to compare both cards
    setTimeout(() => {
      setIsSetSelected(false);
    }, 1000);
  }, [matches]);

  // This condition will flip the card either on the local state
  // on the basis of 'isSelected' or if it find the matches
  const imageMarkup =
    matches.has(card.code) || isSelected ? (
      <img
        width="200"
        src={card.images.png}
        alt={card.code}
        data-testid="card"
      />
    ) : (
      <img
        onClick={() => {
          setIsSetSelected(true);
          onCardSelected(card);
        }}
        width="200"
        src={blank}
        alt={'Hidden'}
        data-testid="card-blank"
      />
    );

  return (
    <div className="cards-spacing mt-2 mb-2" data-testid="card-item">
      {imageMarkup}
    </div>
  );
};

export default CardContainer;
