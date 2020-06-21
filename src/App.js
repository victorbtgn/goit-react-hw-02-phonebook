import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './Components/Container';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import Section from './Components/Section';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
      { id: 'id-3', name: 'Eden Clements', number: '6451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
    ],
    filter: '',
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const toLowerFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter),
    );

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} onChange={this.inputChange} />
        </Section>

        <Section title="Contacts">
          <Filter
            filter={filter}
            contactsLength={contacts.length}
            onChange={this.inputChange}
          />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
