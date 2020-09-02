import { CartActionTypes } from './types';

const initialState = {
  itens: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.SET_CART_ITEM: {
      const { item } = payload;
      let { itens } = state;
      itens.push(item);
      return {
        ...state,
        itens,
      };
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      const { itemKey } = payload;
      let { itens } = state;
      itens.splice(itemKey, 1);

      return {
        ...state,
        itens
      };
    }
    case CartActionTypes.LOAD_LOCAL_CART: {
      const { itens } = payload;

      return {
        ...state,
        itens
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as cartReducer };
