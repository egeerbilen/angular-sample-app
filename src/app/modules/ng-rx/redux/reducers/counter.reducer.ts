import { createReducer, on } from '@ngrx/store';

import { decrement, increment, reset } from '../actions/counter.actions';
import { counterInitialState } from '../store/counter.store';

export const setCounterReducer = createReducer(
  counterInitialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
