import React, { Component } from 'react';

import './App.css';
import Dodawanie from './komponenty/Dodawanie';
import Wyswietlanie from './komponenty/Wyswietlanie';


class App extends Component {
 
 constructor(){
   super();
  this.state={
    items : '',
  }


  this.handlechange=this.handlechange.bind(this);

 }
 
 handlechange =e=>{
  e.preventDefault();
 
this.setState({
  items: e.target.value,
})


 }


  render() {
    
    return (
      <div className="App">
      <Dodawanie change={this.handlechange} />
      <Wyswietlanie result={this.items} />

      </div>
    );
  }
}

export default App;
