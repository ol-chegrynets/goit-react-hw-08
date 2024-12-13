import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase() || contact.number.includes(filter)
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
