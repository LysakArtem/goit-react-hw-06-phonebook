import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

import './App.css';

export default function App() {
  const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <AddContact />

      <ContactList />
    </div>
  );
}
