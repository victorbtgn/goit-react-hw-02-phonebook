import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './Components/Container';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = evt => {
    evt.preventDefault();

    const contact = {
      id: uuidv4(),
      name: this.state.name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <form onSubmit={this.addContact}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.inputChange}
          />
          <br />
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default App;
