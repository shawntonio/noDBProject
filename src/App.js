import React, { Component } from 'react';
import './App.css';
import Events from './components/events/Events';
import Header from './components/header/Header';

class App extends Component {
  
  state = {
    showHeader: true
  }

  toggleHeader = (e) => {
    console.log(e)
    this.setState({showHeader: !this.state.showHeader})
  }
  
  render() {
    return (
      <div className="App">
        {this.state.showHeader ? <Header /> :null}
        
        <Events />
      </div>
    )
  }
}

export default App;
