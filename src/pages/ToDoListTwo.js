import React, { Component } from 'react';
import ToDoItems from './ToDoItems';

class ToDoListTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    //add item function
    addItem(e) {
        var itemArray = this.state.items;

        if(this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value, 
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }
    e.preventDefault();
}   //delete item function
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

    this.setState({
      items: filteredItems  
    });
}
    render () {
        return (
            <div className="todolistMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <h1>Add Music Item</h1>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter Task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}
export default ToDoListTwo;

