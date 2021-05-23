import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from './testUtils/testingHelper';
import App from './App';

afterEach(cleanup);

test('should render default view', async () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('app')).toBeInTheDocument();
});
