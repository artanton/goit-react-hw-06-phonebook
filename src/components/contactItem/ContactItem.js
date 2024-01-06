import { useDispatch } from 'react-redux';
import { DeleteButton, PhoneNoItem } from './ContactItemStyled';
import { deleteContact } from '../../redux/ContactsSlice';

export const ContactItem = ({ contact }) => {
  const {name, number}= contact;
  const phoneNumber = formatPhoneNumber(contact);
  const dispatch = useDispatch();


  function formatPhoneNumber() {
    const num = number.toString();
  
    const formattedNo =
      num.slice(0, 2) +
      '-' +
      num.slice(2, 5) +
      '-' +
      num.slice(5, 8) +
      '-' +
      num.slice(8, 10) +
      '-' +
      num.slice(10);
    const formattedNumber = formattedNo;
    
    return formattedNumber;
  }
  return (
    <PhoneNoItem>
      <p>
        {name}: {phoneNumber}
      </p>
    <DeleteButton onClick={() =>dispatch(deleteContact(contact)) }>Delete</DeleteButton> 
    </PhoneNoItem>
  );
};