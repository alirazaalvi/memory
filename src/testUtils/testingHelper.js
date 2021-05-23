// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import reduxThunk from 'redux-thunk';

// import { applyMiddleware, createStore } from 'redux';
// import { rootReducer } from '../configureStore';

// const store = rootReducer;
// export function renderWithRedux(
//   ui,
//   { initialState, store = createStore(rootReducer, applyMiddleware(reduxThunk), initialState) } = {},
// ) {
//   return {
//     ...render(<Provider store={store}>{ui}</Provider>),
//     // adding `store` to the returned utilities to allow us
//     // to reference it in our tests (just try to avoid using
//     // this to test implementation details).
//     store,
//   };
// }


// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// import { initialState as reducerInitialState, reducer } from './reducer'
import { rootReducer, reducerInitialState } from '../configureStore';


function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(rootReducer, applyMiddleware(reduxThunk), initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }