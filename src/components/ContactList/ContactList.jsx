import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filtList = useSelector(selectFilteredContacts);

  return (
    <List>
      {filtList.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </List>
  );
};
