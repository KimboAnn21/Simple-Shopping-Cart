import React, { Component } from 'react';
import { Cart } from './Cart';
import { List } from './List';

const musicItems = [];

    musicItems = [
        {
            name: "Kimbo Live",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/KimboLive.png",
        },
        {
            name: "The Kimbo Band",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859659/DredLocksLive.png",
        },
        {
            name: "Four Leaves Left",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/FourLeavesLive.png",
        },
        {
            name: "Spokes Album-Kimbo",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859659/SpokesAlbum.png",
            sale: "https://www.amazon.com/Spokes-Kimbo/dp/B01H7XZ17E",
        },
        {
            name: "10.10 Session",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/10.10_Session.png",
            sale: "https://www.amazon.com/10-10-Session-Four-Leaves-Left/dp/B0064WRDYY",
        },
        {
            name: "First Concert 1980",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554861899/First%20Concert%20Circa%201980.jpg",
        },
    ];
    
    this.setState({ 
        cart: cart || [],
        items
      });

