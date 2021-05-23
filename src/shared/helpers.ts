import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';
import { ThunkDispatchType } from './AppTypes';

export type ErrorInfo = {
  status: number;
  statusText: string;
  data: any; // tslint:disable-line:no-any
};

export function useReduxDispatch(): ThunkDispatchType {
  return useDispatch<ThunkDispatchType>();
}

export function formatApiError(response?: AxiosResponse): ErrorInfo {
  if (response) {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  return {
    data: '',
    status: 0,
    statusText: 'Unknown error',
  };
}

export const getBaseUrl = () => 'http://localhost:3000';
