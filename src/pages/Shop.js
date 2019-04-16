import React, { Component } from "react";
import { List } from "../Components/List";
import { Cart } from "../Components/Cart";

class Shop extends Component {
    state = {
        items: [],
        cart: []
    }

    addToCart = item => () => {
        const cart = [...this.state.cart, item];
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
    }

    removeFromCart = index => () => {
        this.state.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        this.setState({ cart: this.state.cart });
    }

    componentDidMount() {
        //This is what will call Local Storage
        const cartJSON = localStorage.getItem("cart");
        const cart = JSON.parse(cartJSON);
        fetch("https://mysterious-savannah-64434.herokuapp.com/items")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data){
            
            console.log(data)
        })
        



        //Random list of items from backend
        let items = [
            {
                class: '1',
                name: 'Takemeine 12-String Guitar',
                image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859660/Takemeine_12_String.png',
                price: '$1,199.00'
            },
            {
                class: '2',
                name: 'Puppy Dog',
                image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1552771098/PuppyDoggy.jpg',
                price: '$12,400',
            },
            {
                class: '3',
                name: 'Martin DC-28 1991',
                image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859659/Martin_DC-28.png',
                price: '$2,795.00',
            },
            {
                class: '4',
                name: 'Marshall Acoustic Amp',
                image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/MarshallAmp.png',
                price: '$499.00',

            },
            {
                class: '5',
                name: 'Mesa Boogie Amp',
                image: 'https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554860178/Mesa_Boogie_Express_550_Front.png',
                price: '$1,599.00',
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
            <div>
            <div className="grid-container">
                <List items={this.state.items} addToCart={this.addToCart} />
                <Cart items={this.state.cart} removeFromCart={this.removeFromCart} />
            </div>
            </div>
        );
    }
}

export default Shop;