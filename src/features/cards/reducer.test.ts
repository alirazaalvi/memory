import { reducer, defaultState } from './reducer';
import { cards } from '../../data/testData';
import { messagesList } from '../../shared/messages';
import { ActionNames } from './actions';

describe('cards reducer', () => {
  it('should return the cards request state', () => {
    expect(
      reducer(defaultState, {
        type: ActionNames.FETCH_CARD_REQUEST,
        request: null,
      })
    ).toEqual({
      cards: [],
      activityStatusMessage: messagesList['apiFetch'],
    });
  });

  it('should return the cards success state with results', () => {
    expect(
      reducer(defaultState, {
        type: ActionNames.FETCH_CARD_SUCCESS,
        request: null,
        payload: cards,
      })
    ).toEqual({
      cards: cards.cards,
      activityStatusMessage: '',
    });
  });

  it('should return the cards error state', () => {
    expect(
      reducer(defaultState, {
        type: ActionNames.FETCH_CARD_ERROR,
        request: null,
        error: { data: '', status: 404, statusText: 'Not Found' },
      })
    ).toEqual({
      cards: [],
      activityStatusMessage: messagesList['apiError'],
    });
  });
});
