import produce from 'immer';
import { CardActionTypes, ActionNames } from './actions';
import { messagesList } from '../../shared/messages';
import { Card } from './types';

// Application state where data will mainly reside inside cards object
export interface CardState {
  cards: Card[];
  activityStatusMessage: string;
}

export const defaultState: CardState = {
  cards: [],
  activityStatusMessage: '',
};

export const reducer = (
  state: CardState = defaultState,
  action: CardActionTypes
) =>
  produce(state, (draft) => {
    let currentDraft = draft;

    switch (action.type) {
      case ActionNames.FETCH_CARD_SUCCESS: {
        currentDraft.cards = action.payload.cards;
        return;
      }
      case ActionNames.FETCH_CARD_REQUEST: {
        currentDraft.activityStatusMessage = messagesList['apiFetch'];
        return;
      }
      case ActionNames.FETCH_CARD_ERROR: {
        currentDraft.activityStatusMessage = messagesList['apiError'];
        return;
      }
      default: {
        currentDraft = draft;
      }
    }
  });

export default reducer;
