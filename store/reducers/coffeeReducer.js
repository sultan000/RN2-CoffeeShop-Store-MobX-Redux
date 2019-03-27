import * as actionTypes from "../actions/types";

const initalState = {
  coffeeShops: [],
  loading: true
};

const coffeeReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: state.coffeeShops.concat(action.payload),
        loading: false
      };
    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default coffeeReducer;
