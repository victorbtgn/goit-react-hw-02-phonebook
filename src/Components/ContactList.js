import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);

export default ContactList;
