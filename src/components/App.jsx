import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, MainTitle, ListTitle } from './Layout/Layout.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
