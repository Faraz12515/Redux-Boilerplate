import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SELECTED_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
}
