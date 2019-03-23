import React, { Component } from 'react';
import { List } from "./Components/List";
import { Cart } from "./Components/Cart";
//import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


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
    let items = [
      {
        class: '1',
        name: 'Tums-Open Container',
        image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/ThreeQuartersFullTums.jpg',
        price: '$.35',
      },
       {
         class: '2',
         name: 'Puppy Dog',
         image:'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/PuppyDoggy.jpg',
         price: '$12,400',
       },
       {
         class: '3',
         name: 'Slightly Used Teabag',
         image:'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/SlightlyUsedTeabag.jpg',
         price: '$72',
        },
       {
         class: '4',
         name: 'Syringe from Unknown User', 
         image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/UsedSyrings.jpg',
         price: 'Free STD',
       
        },
       {
         class: '5',
         name: 'Drag Queen Eyeglitter found in Women\'s Bathroom',
         image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/DragQueenEyeshadow.jpg',
         price: 'Ummmm...', 
       },
       {
         class: '6',
         name: 'Cello',
         image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/DaisyCello.png',
         price: '$1,000', 
       },
    ];

    this.setState({ 
      cart: cart || [],
      items
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Tempting, huh?</h2>
          <div class="grid-container">
            <List items = {this.state.items} addToCart = {this.addToCart} />

            <Cart items = {this.state.cart} removeFromCart = {this.removeFromCart}/>
          </div>
      </div>
    );
  }
}

export default App;
