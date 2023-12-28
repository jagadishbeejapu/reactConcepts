import { Component, component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component{
  constructor(){
    super();
    this.state={
      name:'jagadish',
    }
  }
 
 
  render(){

    return ( <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Hi {this.state.name}
      </p>
    <button onClick={() => {
      this.setState({name:'selena'});
      console.log(this.state);
    }
      }>change name</button>
    </header>
  </div>
);
  }
 
}

export default App;
