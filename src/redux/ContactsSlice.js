import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        const contactExist = state.contacts.some(
          contact => contact.name === action.payload.name
        );

        if (contactExist) {
          Notiflix.Notify.failure(
            ` ${action.payload.name} is already in the phonebook `
          );
        } else {
          state.contacts.push(action.payload);
        }
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

