import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './configureStore';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index.tsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={Store}>
        <App />
      </Provider>,
      div
    );
  });
});
