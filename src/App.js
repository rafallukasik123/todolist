import React, { Component } from 'react';

import './App.css';
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
  console.log(temp);
  let tempTable  = [...this.state.tablica,temp];
  console.log(tempTable);
  this.setState({
    tablica: tempTable,
  })


}


  render() {

   //console.log(this.state.tablica);
    return (
      <div className="App">
           <Dodawanie change={this.handlechange} submit={this.handleSubmit} />
<Wyswietlanie result={this.item} />
      </div>
    );
  }
}

export default App;
