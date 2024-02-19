import { createReducer, on } from '@ngrx/store';

import * as setUserData from '../actions/user.actions';
import { userInitialState } from '../store/user.store';

export const setUserDataReducer = createReducer(
  userInitialState,
  on(setUserData.setUserData, (state, { userData }) => ({ ...state, userData: userData }))
);
