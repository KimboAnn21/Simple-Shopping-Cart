import React from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/List">Items to Buy</a></li>
                <li><a href="/Cart">Purchase Here</a></li>
                </ul>
                <div className="content">
                </div>
            </div>
        );
    }
}
export default Main;
