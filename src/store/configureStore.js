import { createStore } from 'redux';

import { createRootReducer } from './index';

export default function configureStore(initialState) {
  const store = createStore(createRootReducer(), initialState);

  return store;
}
