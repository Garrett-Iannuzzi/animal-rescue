import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimalsCall, getDonationsCall } from '../apiCalls';
import { hasError, isLoading, getAnimals } from '../actions/actions';
import Loader from '../loader/loader';
import './App.css';

export class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    getAnimalsCall()
      .then(data => this.props.getAnimals(data))
      .catch(err => this.props.hasError(err))

    getDonationsCall() 
      .then(data => this.props.getDonations(data))
      .catch(err => this.props.hasError(err))
  }

  handleLoading = () => {
    this.props.isLoading(true)
    if(isLoading) {
      this.props.isLoading(false)
      return(
        <Loader />
      )
    }
  }



  render() {
    const disPlayAnimals = this.props.animals.map(animal => {
      return(
        <>
          <img src={animal.img} ></img>
          <h2>{animal.name}</h2>
          <h3>{animal.species}</h3>
          <p>{animal.description}</p>
        </>
      )
    })

    return(
      <div>
        {!hasError.length ? <p>{this.props.error}</p> : <p></p>}
      {!this.props.animals.length ? this.handleLoading() :  
        <article>
          {disPlayAnimals}
        </article>
      }
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  animals: state.animals,
  error: state.hasError
});


export const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimals(animals)),
  hasError: bool => dispatch(hasError(bool)),
  isLoading: bool => dispatch(isLoading(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
