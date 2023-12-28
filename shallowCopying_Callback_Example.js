import { Component, component } from 'react';

import logo from './logo.svg';
import './App.css';

class  App extends Component{
  constructor(){
    super();
    this.state={
      name:{firstName:'jagadish',lastName:'beejapu'},
      song:'good for you'
    }
  }
 
 
  render(){

    return ( <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Hi {this.state.name.firstName} {this.state.name.lastName},song name {this.state.song}
      </p>
    <button onClick={() => {
      this.setState(
        ()=>{
            return {
              name:{firstName:'selena',lastName:'gomez'},
            };
      },
      ()=>{
      console.log(this.state);
      }
      );
    }
      }>change name</button>
    </header>
  </div>
);
  }
 
}

export default App;
