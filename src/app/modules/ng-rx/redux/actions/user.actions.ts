import { createAction, props } from '@ngrx/store';

export const setUserData = createAction('[Counter Component] setUserData', props<{ userData: object }>());
