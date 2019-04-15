import React, { Component } from 'react';
import './App.css';
import Events from './components/events/Events';
import Header from './components/header/Header';

class App extends Component {
  
  state = {
    showHeader: true,
    scrollPos: 0
  }

  

  scrollHandle = (e) => {
    const {scrollPos} = this.state
    const newScrollPos = e.target.scrollTop
    const showHeader = scrollPos > newScrollPos
    
    this.setState({scrollPos: newScrollPos, showHeader})
    
  }
  
  render() {
    console.log(this.state.scrollPos)
    return (
      <div className="App" onScroll={this.scrollHandle} >
        <Header showHeader={this.state.showHeader} />
  
        <Events showHeader={this.state.showHeader}/>
       
      </div>
    )
  }
}

export default App;
