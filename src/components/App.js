import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimalsCall, getDonationsCall } from '../apiCalls';
import { hasError, isLoading, getAnimals, getDonations } from '../actions/actions';
import Loader from '../loader/loader';
import DonationForm from '../components/DonationForm/DonationForm';
import './App.css';

export class App extends Component {

  componentDidMount() {
    const { getAnimals, hasError, getDonations } = this.props;
    getAnimalsCall()
      .then(data => getAnimals(data))
      .catch(err => hasError(err))

    getDonationsCall() 
      .then(data => getDonations(data))
      .catch(err => hasError(err))
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
    const { animals, donations, hasError, } = this.props;
    const disPlayAnimals = animals.map(animal => {
      return(
        <>
          <img src={animal.img} ></img>
          <h2 key={animal}>{animal.name}</h2>
          <h3>{animal.species}</h3>
          <p>{animal.description}</p>
        </>
      )
    })

    const displayDonations = donations.flat().map(donation => {
      return(
        <>
          <h2>{donation.name}</h2>
          <p>$ {donation.donation}</p>
        </>
      )
    })

    return(
      <div>
        {!hasError.length ? <p>{this.props.error}</p> : <p></p>}
          {!animals.length ? this.handleLoading() :  
          <article>
            {disPlayAnimals}
          </article>
        }
        {!hasError.length ? <p>{this.props.error}</p> : <p></p>}
        {!donations ? this.handleLoading() :
        <section>
          {displayDonations}
        </section>
        }
        <DonationForm />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  animals: state.animals,
  error: state.hasError,
  donations: state.donations
});

export const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimals(animals)),
  hasError: bool => dispatch(hasError(bool)),
  isLoading: bool => dispatch(isLoading(bool)),
  getDonations: donations => dispatch(getDonations(donations))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
