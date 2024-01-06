import { useSelector } from 'react-redux';
import { ContactItem } from '../contactItem/ContactItem';
import { PhoneNoList } from './ContactListStyled';



export const ContactList = () => {
  const storeContacts = useSelector (state=>state.cont.contacts);
  const searchedContact = useSelector (state=>state.filt.filter)

  const actualContacts = storeContacts.filter(contact => {
    const fitContact = contact.name
      .toLowerCase()
      .includes(searchedContact.toLowerCase());
    return fitContact;
  });
  return (
    <PhoneNoList>
      {actualContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </PhoneNoList>
  );
};