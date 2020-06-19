import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = "Tsegazeab";

    const foo = () => 'Bar';

    return (
      <div className='App' >
        <h1>Hello {foo()}</h1>
      </div>
    );
  }
}

export default App;
