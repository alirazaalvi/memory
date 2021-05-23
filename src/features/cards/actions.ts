import { ThunkDispatch } from 'redux-thunk';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { AppState } from '../../shared/store';
import { formatApiError } from '../../shared/helpers';
import { ApiRequest, ApiResponse, ApiError } from '../../shared/AppTypes';
import { Card } from './types';
import { getBaseUrl } from '../../shared/helpers';

// Name of actions which will be set to enum so that it will remain consistent
// and autocomplete will suggest the names of actions at any file.
export enum ActionNames {
  FETCH_CARD_REQUEST = 'FETCH_CARD_REQUEST',
  FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
  FETCH_CARD_ERROR = 'FETCH_CARD_ERROR',
}

// Setting up the types for payloads and type
export type Actions =
  | ({ type: ActionNames.FETCH_CARD_REQUEST } & ApiRequest<null>)
  /* eslint-disable */
  | ({ type: ActionNames.FETCH_CARD_SUCCESS } & ApiRequest<null> &
  ApiResponse<GetCardResponse>)
  /* eslint-enable */
  | ({ type: ActionNames.FETCH_CARD_ERROR } & ApiRequest<null> & ApiError);

export interface GetCardResponse {
  cards: Card[];
}

// It will fetch the list of posts using axios for http requests.
export const fetchCards = (pairs = 6) => {
  return async (dispatch: ThunkDispatch<AppState, any, Actions>) => {
    dispatch({ type: ActionNames.FETCH_CARD_REQUEST, request: null });
    axios
      .get(`${getBaseUrl()}/cards/${pairs}`)
      .then((response: AxiosResponse) => {
        const cards = response.data.cards as Card[];

        dispatch({
          type: ActionNames.FETCH_CARD_SUCCESS,
          request: null,
          payload: { cards },
        });
      })
      .catch((error: AxiosError) => {
        dispatch({
          type: ActionNames.FETCH_CARD_ERROR,
          request: null,
          error: formatApiError(error.response),
        });
      });
  };
};

export type CardActionTypes = Actions;
