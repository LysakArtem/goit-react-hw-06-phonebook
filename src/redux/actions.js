import { createAction } from '@reduxjs/toolkit';

export const formSubmitHandler = createAction('contact/SubmitHandler');
export const removeContact = createAction('contact/removeContact');
export const changeFilter = createAction('contact/changeFilter');
