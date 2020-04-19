import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CommentSection from './components/CommentSection';

class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar />
        <CommentSection />
      </div>
    );
  }
}

export default App;
