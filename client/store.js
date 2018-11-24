import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments,
};

const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default store;
