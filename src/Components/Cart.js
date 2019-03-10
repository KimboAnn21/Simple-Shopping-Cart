import React from 'react';

export const Cart = ({items, removeFromCart}) => (
    <div>
        <h2>Basket</h2>
        <ul>
            {items.map((item, index) => (
                <li key = {index} onClick = {removeFromCart(index)}>
                </li>
            ))}
        </ul>
    </div>
);
  