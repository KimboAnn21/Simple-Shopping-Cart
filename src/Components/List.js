import React from 'react';
import Button from "./Button";



export const List = ({ addToCart, items }) => {
    let myStyle = {
        border: '2px solid black',
        textAlign: 'center', 
        margin: '10px',
        maxWidth: '200px',
        maxHeight: '200px',
        border: '2px solid rgb(233,171,88)',
        borderRadius: '2px',
        backgroundColor: '#696969',
        color: '#daa520' 
            
    }
    return (
        <div>
            <h2>Boutique</h2>
            <ul>
                {items.map((item, key) => (
                    <li key={key} style={myStyle}>
                        <div>{item.name}</div>
                        <img height="90" width="70" alt="Cart Items" src={item.image} />
                        <div>{item.price}</div>
                        <Button onClick={addToCart(item)}>Add to cart</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}