// import { action } from "mobx";

const intialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
