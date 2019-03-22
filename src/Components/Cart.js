import React from 'react';


export const Cart = ({items, removeFromCart}) => (
    <div>
        <h2>Cart</h2>
        <ol>
            {items.map((item, index) => (
                <li key = {index} onClick = {removeFromCart(index)}>
                {item.name}
                </li>
            ))}
        </ol>
    </div>
);