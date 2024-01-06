import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cont'],
};

const rootReducer = combineReducers({
  cont: contactsReducer,
  filt: filterReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store)


