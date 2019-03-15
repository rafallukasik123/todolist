import React, { Component } from 'react';



class Wyswietlanie extends Component {

constructor(props){
  super(props);
  this.createTask=this.createTask.bind(this);
}
 


  createTask(item){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + ' ' + dd + ' ' + yyyy;
    
    console.log(today);
    return  <li key={item.key} >
    {item.tekst} 
    {today}
    <input type="button" defaultValue="usun" onClick={() => this.props.usuwanie(item.key)} />
  </li>
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