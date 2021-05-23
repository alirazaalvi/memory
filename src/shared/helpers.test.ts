import { AxiosResponse } from 'axios';
import { formatApiError } from './helpers';

const testResponse: AxiosResponse = {
  data: { test: 'test data' },
  status: 200,
  statusText: 'Success',
  headers: {},
  config: {},
  request: {},
};

describe('helpers', () => {
  it('formatApiError should format error message', () => {
    expect(formatApiError(testResponse)).toEqual({
      data: testResponse.data,
      status: testResponse.status,
      statusText: testResponse.statusText,
    });
  });

  it('formatApiError should return error message in case of empty response input', () => {
    expect(formatApiError()).toEqual({
      data: '',
      status: 0,
      statusText: 'Unknown error',
    });
  });
});
