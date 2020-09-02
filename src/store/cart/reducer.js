import { CartActionTypes } from './types';

const initialState = {
  itens: {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.UPDATE_CART_ITENS: {
      return { ...state, itens: payload };
    }
    case CartActionTypes.LOAD_LOCAL_CART: {
      const { itens } = payload;
      return { ...state, itens };
    }
    default: {
      return state;
    }
  }
};

export { reducer as cartReducer };
