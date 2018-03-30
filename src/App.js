import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
// import Product from "./components/Product/Product";
import Form from "./components/Form/Form";
import axios from "axios";
class App extends Component {
  constructor(){
    super();
    this.state ={
    }
    this.create = this.create.bind(this);
  }

create(product_name,price,image_url){
  axios
  .post("/api/products",{ product_name, price, image_url})
  .then(res => {this.setState({
    products:res.data
  });
})
}






  render() {
    return (
      <div class="Everything">
      <Header/>
      <Dashboard
      
      // create = {this.create}
      // product_name={products.product_name} 
      />
      <Form/>  
      </div>
    );
   
  
  }
}

export default App;
  // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>