import React, { Component } from 'react';
import { getAnimals } from './apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    getAnimals()
      .then()
  }

  render() {
    return(
      <h1>Hi</h1>
    )
  }
}




export default App;
