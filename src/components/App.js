import React, { Component } from 'react';
import { useState } from 'react';
// import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
      <form>
        <div>
            <h1>Input Bike Here!</h1>
          <input
            name='brand'
            placeholder='Brand'
          />
          <input
            name='model'
            placeholder='Model'
          />
        </div>
      </form>
    </div>
        )
    }
}

export default App;