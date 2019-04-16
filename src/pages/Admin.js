import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      alert('This item will be added upon review: ' + this.input.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Item:
            <input type="text" ref={(input) => this.input = input} />
            <input type="submit" value="Submit" />
            </label>
            <br />
            <br />
            <label>Price: 
            <input type="text" ref={(input) => this.input = input} />
            <input type="submit" value="Submit" />
            </label>
            <br /> <br />
            <label>Image: 
            <input type="text" ref={(input) => this.input = input} />
            <input type="submit" value="Submit" />
          </label>
          
  
        </form>
      );
    }
  }

  export default NameForm;