import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";
import coffeeshops from "./list";
// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;
    if (loading) {
      return <Spinner />;
    }
    // if ()

    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});
export default connect(mapStateToProps)(CoffeeList);
