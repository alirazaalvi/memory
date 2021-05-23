import { rootReducer } from '../configureStore';
import * as cards from '../features/cards/reducer';
import { CardActionTypes } from '../features/cards/actions';

export type AppState = ReturnType<typeof rootReducer>;

export type ActionTypes = CardActionTypes;

export const reducers = {
  cardsReducer: cards.reducer,
};
