import axios from 'axios';

jest.mock('axios');
export const mockAxios = axios as jest.Mocked<typeof axios>;
