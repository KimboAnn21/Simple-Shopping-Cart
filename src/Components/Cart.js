import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const Cart = ({items, removeFromCart}) => (
    <div>
        <h2>Basket</h2>
        <ol>
            {items.map((item, index) => (
                <li key = {index} onClick = {removeFromCart(index)}>
                {item}
                </li>
            ))}
        </ol>
    </div>
);
 
const rootElement = document.getElementById("root");
  ReactDOM.render(<App/>, rootElement);