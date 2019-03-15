import React, { Component } from 'react';

import './Style/style.scss';
import Dodawanie from './komponenty/Dodawanie';
import Wyswietlanie from './komponenty/Wyswietlanie';


class App extends Component {
 
 constructor(){
   super();
  this.state={
    item : {tekst : '', key: ''},
    tablica : [],
  }


  this.handlechange=this.handlechange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
 }
 
 handlechange =e=>{
  e.preventDefault();
 
  const temp= {tekst :e.target.value , key : Date.now()}
this.setState({
  item: temp,
})
}

handleSubmit =e=>{
  e.preventDefault();
  const temp= {tekst : this.state.item.tekst , key : Date.now()};

  let tempTable  = [...this.state.tablica,temp];

  this.setState({
    tablica: tempTable,
    
  })


}
deleteItem = key => {


  const filteredItems = this.state.tablica.filter(item => {
    return item.key !== key
  })
  this.setState({
    tablica: filteredItems,
  })
}


  render() {

   
    return (
      <div className="body">
      <Dodawanie className="dodawanie" change={this.handlechange} submit={this.handleSubmit} />
      <Wyswietlanie className="wyswietlanie" result={this.state.tablica} usuwanie={this.deleteItem} />

      </div>
    );
  }
}

export default App;
