import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  createContact = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.createContact}>
        <label>
          Name *
          <br />
          <input
            type="text"
            name="name"
            value={name}
            className="input"
            onChange={this.inputChange}
          />
        </label>
        <br />
        <label>
          Phone number *
          <br />
          <input
            type="tel"
            pattern="[0-9]{7}"
            name="number"
            value={number}
            className="input"
            onChange={this.inputChange}
          />
        </label>
        <br />
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
