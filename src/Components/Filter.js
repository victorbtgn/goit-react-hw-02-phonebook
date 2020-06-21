import React from 'react';

const Filter = ({ filter, contactsLength, onChange }) => (
  <>
    {contactsLength > 1 && (
      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          name="filter"
          value={filter}
          className="input"
          // placeholder="Phone number"
          onChange={onChange}
        />
      </label>
    )}
  </>
);

export default Filter;
