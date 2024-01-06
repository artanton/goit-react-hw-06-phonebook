import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessageStyled,
  FieldGroup,
  FieldStyled,
  FormStyled,
} from './ContactFormStyled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/ContactsSlice';
import Notiflix from 'notiflix';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/,
      'Insert Name and Surname please'
    )
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{12}$/, 'Please enter 12 digits')

    .required('Required'),
});

export const ContactForm = () => {
  const dispatchContact = useDispatch();
  const contacts = useSelector(state => state.cont.contacts);

  const onAdd = (newContact, actions) => {
    const contactExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (contactExist) {
      Notiflix.Notify.failure(
        ` ${newContact.name} is already in the phonebook`
      );
    } else {
      dispatchContact(addContact(newContact));
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={onAdd}
    >
      <FormStyled>
        <FieldGroup>
          Name
          <FieldStyled name="name" type="string" placeholder="John Smith" />
          <ErrorMessageStyled name="name" component="span" />
        </FieldGroup>

        <FieldGroup>
          Phone Number
          <FieldStyled name="number" type="tel" placeholder="130123456789" />
          <ErrorMessageStyled name="number" component="span" />
        </FieldGroup>

        <Button type="submit">Add Contact</Button>
      </FormStyled>
    </Formik>
  );
};
