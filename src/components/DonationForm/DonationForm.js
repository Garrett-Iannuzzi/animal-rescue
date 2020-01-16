import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDonations } from '../../actions/actions';
import { postDonation } from '../../apiCalls';


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

  handleSubmit = (e) => {
    e.preventDefault()
    const newDonation = { id: Date.now(), name: this.state.name, donation: Number(this.state.donation)}
    postDonation(newDonation).then(data => getDonations(data))
    this.props.getDonations(newDonation)
    this.resetInputs()
  }

  resetInputs = () => {
    this.setState({ name: '', donation: 0 })
  }

  render() {
    return(
      <form>
        <label>Name:</label>
        <input
          className='input-name'
          name='name'
          value={this.state.name}
          placeholder='Eneter Name'
          onChange={ (e) => this.handleChange(e) } 
        />

        <label>Donation Amount: $ </label>
        <input
          className='input-donation'
          name='donation'
          value={this.state.donation}
          placeholder='Eneter Donation'
          onChange={ (e) => this.handleChange(e) } 
        />
        <button onClick={ (e) => this.handleSubmit(e) }>Donate!</button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  donations: state.donations
});

export const mapDispatchToProps = dispatch => ({
  getDonations: donation => dispatch(getDonations(donation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);