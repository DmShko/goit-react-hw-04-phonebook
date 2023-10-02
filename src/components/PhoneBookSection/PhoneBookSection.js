// get components link from 'components' directory
import { DataIn } from '../DataIn/DataIn';
import { DataOut } from '../DataOut/DataOut';
import { FindContacts } from '../FindContacts/FindContacts';

// add css modules
import phoneSec from './PhoneBookSection.module.css';

export const PhoneBookSection = ({ users, userFilter, userDel, data }) => {
  
    // <DataIn> - this component performs save input data and validation.
    // here change THIS state and main state in App.
    // <FindContacts - this component change 'filter' property in App 'state'
    // this value use in <Dataout> component for out users
  return (
    <div className={phoneSec.section}>
      <DataIn change={users} />

      <p>Contacts</p>
      <FindContacts
        findFilter={userFilter}
      />

      <ul className={phoneSec.list}>
        {data.contacts.map(result => {
          return (
            <DataOut
              key={result.id}
              userData={data}
              print={result}
              del={userDel}
            />
          );
        })}
       </ul>
    </div>
  );
}