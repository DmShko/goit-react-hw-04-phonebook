import { useReducer, useEffect } from 'react';
import Notiflix from 'notiflix';
import reducer from 'reducer';

import { PhoneBookSection } from './components/PhoneBookSection/PhoneBookSection';

export const App = () => {

  // get data from LocalStorage
  const getFromLocal = () => {
    if(JSON.parse(localStorage.getItem("phonebook"))) return JSON.parse(localStorage.getItem("phonebook"));
    Notiflix.Notify.warning("LocalStorage 'phonebook' is epmty!", {position: 'center-top', fontSize: '24px',});
  }

  // see file reducer.js
  const [ book, dispatch ] = useReducer(reducer,  getFromLocal() || {contacts: [], filter: ''});
 
  useEffect(() => {
    // add data, if state was changed
    localStorage.setItem("phonebook", JSON.stringify(book));
  }, [book]);

  return (
    <>
      <p>Phonebook</p>
      <PhoneBookSection
        users={dispatch}
        userDel={dispatch}
        userFilter={dispatch}
        data={book}
      />
    </>
  );
}
