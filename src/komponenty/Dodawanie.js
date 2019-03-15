import React, { Component } from 'react';

import '../Style/style.scss';

class Dodawanie extends Component {
constructor(props)
{

  super(props);
}

  render() {
    return (
     <form className="dodawanie_form" onSubmit={this.props.submit}>
       <input onChange={this.props.change}  />
      <input className="dodawanie_form--submit" type="submit" value="Submit" />

     </form>
     
    );
  }
}

export default Dodawanie;