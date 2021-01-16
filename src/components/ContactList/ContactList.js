import Filter from '../Filter';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getContacts, getContactsFiltered } from '../../redux/selectors';
import s from './ContactList.module.css';
export default function ContactList() {
  const contacts = useSelector(getContacts);
  const contactsFiltered = useSelector(getContactsFiltered);

  const dispatch = useDispatch();

  if (contacts.length === 0) return null;
  return (
    <div className={s.contacts}>
      <h1 className={s.title}>Contacts</h1>
      {contacts.length === 1 ? null : <Filter />}
      {contactsFiltered.length !== 0 ? (
        <ul className={s.contactList}>
          {contactsFiltered.map(({ id, name, number }) => (
            <li className={s.contactItem} key={id}>
              <span className={s.name}>{name}: </span>
              <span className={s.number}>{number}</span>
              <button
                type="button"
                className={s.button}
                onClick={() => dispatch(actions.removeContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Такого контакта в списке нет!</p>
      )}
    </div>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   contactsFiltered: PropTypes.array.isRequired,
//   onRemove: PropTypes.func.isRequired,
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };
