import React from 'react';
import Button from "./Button";

export const List = ({ addToCart, items }) => {
    let myStyle = {
        border: '2px solid black',
        textAlign: 'center', 
        margin: '10px',
        maxWidth: '300px',
        borderRadius: '12px',
        backgroundColor: '#696969',
        color: '#daa520' 
            
    }
    return (
        <div>
            <h2>For Sale</h2>
            <ul>
                {items.map((item, key) => (
                    <li key={key} style={myStyle}>
                        <div>{item.name}</div>
                        <img width="100" alt="Cart Items" src={item.image} />
                        <div>{item.price}</div>
                        <Button onClick={addToCart(item)}>Add to Basket</Button>
                        <i class="fas fa-cart-plus"></i>
                    </li>
                ))}
            </ul>
        </div>
    )
}