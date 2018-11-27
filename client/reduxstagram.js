import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import { sentry_url } from './data/config';

import store, { history } from './store';

import './styles/style.styl';

import App from './App';

Sentry.configureScope((scope) => {
  scope.setTag('user_mode', 'admin');
});

Sentry.init({
 dsn: sentry_url
});

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.querySelector('[data-js="app"]'));
