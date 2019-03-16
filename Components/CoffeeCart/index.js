import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  state = {
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
  render() {
    let items = this.state.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeCart;
