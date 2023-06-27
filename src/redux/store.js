import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';

import postsReducer from './postsRedux';

const subreducers = {
  posts: postsReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
