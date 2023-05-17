import React from 'react';
import css from './Contacts.module.css';

function Filter({ value, onChange }) {
  return (
    <div  className={css.filter}>
    <label>
      Find contacts by name<br/>
      <input className={css.input} type="text" value={value} onChange={onChange} />
    </label>
    </div>
  );
}

export default Filter;
