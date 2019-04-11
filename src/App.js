import React, { Component } from 'react';
import './App.css';
import Events from './components/events/Events'

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Gifty</h1>
        </header>
        <Events />
      </div>
    )
  }
}

export default App;
