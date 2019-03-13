import React, { Component } from 'react';



class Dodawanie extends Component {
constructor(props)
{

  super(props);
}

  render() {
    return (
     <form onSubmit={this.props.submit}>
       <input onChange={this.props.change}  />
      <input type="submit" value="Submit" />

     </form>
     
    );
  }
}

export default Dodawanie;