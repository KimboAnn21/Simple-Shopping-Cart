import React, { Component } from 'react';
import Button from "./Button";


export const NewItems = ({ addToCart, items }) => {
class CatalogItem extends Component {
    render() {
        return (
        <div>
            <h2>Add Items</h2>
            <ul>
                {items.map((item, key) => (
                    <li key={key} style={myStyle}>
                        <div>{item.name}</div>
                        <img width="100" alt="Catalog Items" src={item.image} />
                        <div>{item.price}</div>
                        <Button onClick={addToCart(item)}>Add to cart</Button>
                    </li>
                ))}
            </ul>
        </div>
        )
    }
}