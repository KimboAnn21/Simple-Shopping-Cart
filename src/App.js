import React, { Component } from 'react';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import NameForm from './pages/Admin';
import ToDoItems from './pages/ToDoItems';
import ToDoListTwo from './pages/ToDoListTwo';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/Admin" component={NameForm} />
            <Route path="/ToDoItems" exact component={ToDoItems} />
            <Route path="/ToDoListTwo" component={ToDoListTwo} />
          </Switch>
          
          <ul className="header">
          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/todolist">Add New Test</Link></li>
            <li><Link to="/todoItems">Add Item Test</Link></li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;