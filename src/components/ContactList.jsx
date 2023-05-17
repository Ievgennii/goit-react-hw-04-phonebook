import React from 'react';
import css from './Contacts.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
