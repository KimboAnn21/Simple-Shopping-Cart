import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const List = ({ addToCart, items }) => (
    <div>
        <h2>Boutique</h2>
            <ul>
                {items.map((item, key) => (
                    <li key = {key} onClick = {addToCart(item)}>
                        {item} 
                    </li>
                ))}
            </ul>            
    </div>
);

const rootElement = document.getElementById("root");
  ReactDOM.render(<App/>, rootElement);