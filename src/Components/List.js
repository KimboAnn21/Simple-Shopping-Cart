import React from 'react';

export const List = ({ addToCart, items }) => (
    <div>
        <h2>Boutique</h2>
            <ul>
                {items.map((item, key) => (
                    <li key = {key} onClick = {addToCart(item)}>
                        <div>{item.name}</div>
                        <img height="100" src={item.image} />
                    </li>
                ))}
            </ul>            
    </div>
);