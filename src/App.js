import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {List} from "./Components/List";
import {Cart} from "./Components/Cart";


class App extends Component {

  state = {
    items: [], 
    cart: []
  }

  addToCart = item => () => {
    const cart = [...this.state.cart, item];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({cart});
  }

  removeFromCart = index => () => {
    this.state.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    this.setState({cart: this.state.cart});
  }

  componentDidMount() {
    //This is what will call Local Storage
    const cartJSON = localStorage.getItem("cart");
    const cart = JSON.parse(cartJSON);
    //Random list of items from backend
    const items = ['Tums(used)', 'Hibiscus Teabag (slightly damaged)', 'Puppy Doggy', 'Used Syringe', 'Turtle', 'Giraffe'];
    this.setState({ 
      cart: cart || [],
      items
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <List items = {this.state.items} addToCart = {this.addToCart}/>
        <Cart items = {this.state.cart} removeFromCart = {this.removeFromCart}/>
      </div>
    );
  }
}
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App/>, rootElement);
export default App;
