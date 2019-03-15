import React, { Component } from 'react';
import '../Style/style.scss';


class Wyswietlanie extends Component {

constructor(props){
  super(props);
  this.createTask=this.createTask.bind(this);
}
 


  createTask(item){

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    const houers = today.getHours();
    const minute = today.getMinutes();
    today = mm + ' ' + dd + ' ' + yyyy+ '  '+ houers + ':' + minute;
    
    
    return  <li className="wyswietlanie_li" key={item.key} >
    <p className="wyswietlanie_li--wartosc">{item.tekst} </p> 
    <p className="wyswietlanie_li--data"> {today}</p>
    <input className="wyswietlanie_li-button" type="button" defaultValue="usun" onClick={() => this.props.usuwanie(item.key)} />
  </li>
  }

  


  render() {

    
const table=this.props.result;
  
const listItems=table.map(this.createTask);


    return (
     
     <ul className="wyswietlanie_ulList">{listItems}</ul>
    );
  }
}

export default Wyswietlanie;