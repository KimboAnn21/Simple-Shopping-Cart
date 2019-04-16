import React, { Component } from 'react';

class Home extends Component {
    
        render() {
        return (
            <div className="grid-container">>
            <ul>
                    <h2>Welcome to Kim's Music Box</h2><br />
                    <p>I love music more than just about anything!<br />
                    It's millions of variations and notes touches us<br />
                    in so many ways, and each experience with music is unique to each person.<br />
                    <br />
                    Consumerism is a whole different story for me. <br /> We, as a whole, 
                    buy too much stuff and fill storage sheds and landfills with whatever <br />
                    is the next cool thing. I feel we need fewer things and more MOMENTS together, <br />
                    in our communities, with the TVs off and the phones down.<br /><br />
                    So, while I have these items for sale, I want you to purchase ONLY if they <br />
                    really bring joy and discovery into your life.  
                    </p>
                        {this.musicItems.map(item => (
                            <li>
                                <span>{item.name}</span>
                                <img width="200" src={item.image}/>
                                <i class="fas fa-guitar"></i>
                                {item.sale && <a href={item.sale}>Buy</a>}
                            </li>
                    ))}
                    </ul>
            </div>
        );
    }

    musicItems = [
        {
            //name: "Kimbo Live",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/KimboLive.png",
        },
        {
            //name: "The Kimbo Band",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859659/DredLocksLive.png",
        },
        {
            //name: "Four Leaves Left",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/FourLeavesLive.png",
        },
        {
            //name: "Spokes Album-Kimbo",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859659/SpokesAlbum.png",
            sale: "https://www.amazon.com/Spokes-Kimbo/dp/B01H7XZ17E",
        },
        {
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554859658/10.10_Session.png",
            sale: "https://www.amazon.com/10-10-Session-Four-Leaves-Left/dp/B0064WRDYY",
            //name: "10.10 Session",
        },
        {
            //name: "First Concert 1980",
            image: "https://res.cloudinary.com/kimbolimbodesign/image/upload/v1554861899/First%20Concert%20Circa%201980.jpg",
        },
    ];
} 

export default Home; 