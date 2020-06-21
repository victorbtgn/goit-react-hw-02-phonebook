import React from 'react';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className="list-item">
    <div className="list-item-data">
      <span>{name}:</span>
      <span>
        {number[0]}
        {number[1]}
        {number[2]}-{number[3]}
        {number[4]}-{number[5]}
        {number[6]}
      </span>
    </div>
    <button className="btn" type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
