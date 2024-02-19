import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../store/user.store';

export const getSelectorUserDataState = createFeatureSelector<UserState>('userData');

export const getUserData = createSelector(getSelectorUserDataState, (state: UserState) => state.userData);
