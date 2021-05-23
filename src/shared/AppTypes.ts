import { AppState, ActionTypes } from './store';
import { ThunkDispatch } from 'redux-thunk';
import { ErrorInfo } from './helpers';

export type ApiRequest<T> = { request: T };
export type ApiResponse<T> = { payload: T };
export type ApiError = { error: ErrorInfo };

export type Dispatch<TAction> = (action: TAction) => void;
export type GetState = () => AppState;

export type DispatchType = Dispatch<ActionTypes>;

export type ThunkDispatchType = ThunkDispatch<AppState, void, ActionTypes>;
