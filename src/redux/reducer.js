import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constance";

const initialState = {
    cart:[]
}

export const cartData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer called", action);
      return {...state ,cart:[action.data, ...state.cart]};
    case REMOVE_FROM_CART:
      console.log("reducer called", action);
      state.cart.length = state.cart.length - 1;
      return {...state,cart:[...state.cart]};
    case EMPTY_CART:
      return {...state , cart:[]};
    default:
      return state;
  }
};
