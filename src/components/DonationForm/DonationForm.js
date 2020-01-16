import React, { Component } from 'react';

export class DonationForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '',
      donation: 0
    }
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return(
      <form>
        <label>Name:</label>
        <input></input>

        <label>Donation Amount: $ </label>
        <input></input>
        <button>Submit Donation</button>
      </form>
    )
  }
}

export default DonationForm;