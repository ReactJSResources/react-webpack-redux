import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { hydrate } from 'react-dom';
import App from './components/app';
import userApp from './reducers';
import 'normalize.css';
import 'styles/index.scss';

let store = createStore(userApp)

hydrate(
  <Provider  store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);
