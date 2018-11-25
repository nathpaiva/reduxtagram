import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { render } from 'react-dom';

import store, { history } from './store';

import './styles/style.styl';

import App from './App';

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.querySelector('[data-js="app"]'));
