import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import Store from './configureStore';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
