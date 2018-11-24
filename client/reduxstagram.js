import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store, { history } from './store';

// Import css
import './styles/style.styl';

// Import components
import Main from './components/Main';

render((
  <Provider store={store}>
    <Main history={history} />
  </Provider>
), document.querySelector('[data-js="app"]'));
