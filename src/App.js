import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar'
// Import pages
import Product from './pages/products/productsPage'
import Login from './pages/login/loginPage'
import Home from './pages/home/homePage'
import requireAuth from './utils/requireAuth'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar></Navbar>
            <Route path="/product" component={requireAuth(Product)} />
            <Route path="/login" 
              render={(props)=> <Login {...props}  />} />
            <Route path="/home" component={Home}></Route>
          </div>
        </Router>
    );
  }
}


export default App;
