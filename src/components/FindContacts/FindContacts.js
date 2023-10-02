import { useState, useEffect } from 'react';
// add css modules
import fi from '../FindContacts/FindContacts.module.css';

export const FindContacts = ({ findFilter }) => {

  const [find, setFind] = useState('');

  useEffect(() => {
   
    findFilter({type: 'filter', payload: find});

  }, [find, findFilter]);

  const findContact = evt => {
    // send value of filter to reducer function
    setFind(evt.target.value.toLowerCase());
    
  };

  return (
    
    <label className={fi.label}>
      Find contact by name
      <input
        value={find}
        className={fi.input}
        name="userFind"
        type="text"
        onChange={findContact}
      ></input>
    </label>
  
  );
}

