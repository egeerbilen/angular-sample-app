import { StoreModule } from '@ngrx/store';

import { setCounterReducer } from './counter.reducer';
import { setUserDataReducer } from './user.reducer';

export const storeModules = [StoreModule.forFeature('counter', setCounterReducer), StoreModule.forFeature('userData', setUserDataReducer)];
