import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { filterList } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';
import { Form, FormLabel, Field, SubmitBtn } from './ContactForm.styled';

const initialFormValues = { name: '', phone: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${values.name} is already in contacts`);
      actions.resetForm();
      return;
    }

    dispatch(addContact(values));
    dispatch(filterList(''));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor="number">
          Number
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Formik>
  );
};
