import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments,
};

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(history),
  defaultState,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    )
  )
);

export default store;
