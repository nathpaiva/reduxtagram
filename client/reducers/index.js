import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { posts } from './posts';
import { comments } from './comments';

export const rootReducer = history = combineReducers({
  posts,
  comments,
  router: connectRouter(history)
});
