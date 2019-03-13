import React, { Component } from 'react';



class Wyswietlanie extends Component {

constructor(){
  super();
}


  createTask(item){
    return <li key={item.key}>{item.tekst}</li>
  }


  render() {

    
const table=this.props.result;
  
const listItems=table.map(this.createTask);


    return (
     
     <ul>{listItems}</ul>
    );
  }
}

export default Wyswietlanie;