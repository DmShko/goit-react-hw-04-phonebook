
// add css modules
import o from '../DataOut/DataOut.module.css';

export const DataOut = ({ print, userData, del }) => {
  // chage data in App 'state' (delete user)
  const deleteUser = evt => {
    del({type: 'minus', payload: evt.target.name});
  };

  // out data in App 'state' if user name or number contain filter
  return print.name
    .toLowerCase()
    .includes(userData.filter) ? (
    <li className={o.item}>
      <p>{print.name}</p>
      <button
        className={o.button}
        name={print.id}
        type="button"
        onClick={deleteUser}
      >
        Delete
      </button>
    </li>
  ) : (
    ''
  );
}