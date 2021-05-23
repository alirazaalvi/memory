import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

test('it should render', () => {
  const { getByTestId } = render(<Header label="Memory Cardio" />);

  expect(getByTestId('header-section')).toBeInTheDocument();
});
