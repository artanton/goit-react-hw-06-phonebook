import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        
          state.contacts.push(action.payload);
        
      },
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const filteredContacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      return {
        contacts: [...filteredContacts],
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

