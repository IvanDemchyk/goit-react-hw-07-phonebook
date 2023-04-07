import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function filteredContacts() {
    if (filter === '') {
      return false;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filtList = filteredContacts();

  const list = filtList ? filtList : contacts;

  return (
    <List>
      {list.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </List>
  );
};
