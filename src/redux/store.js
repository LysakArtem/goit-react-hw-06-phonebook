// import { combineReducers } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
  createReducer,
} from '@reduxjs/toolkit';
import * as actions from './actions';
import logger from 'redux-logger';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
  ? JSON.parse(localStorage.getItem('contacts'))
  : [];

const contactsReducer = createReducer(parsedContacts, {
  [actions.formSubmitHandler]: (state, { payload }) => {
    localStorage.setItem('contacts', JSON.stringify([payload, ...state]));
    return [payload, ...state];
  },
  [actions.removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
