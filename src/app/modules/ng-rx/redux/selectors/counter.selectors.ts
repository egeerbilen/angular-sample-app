import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterState } from '../store/counter.store';

export const getSelectorCounterState = createFeatureSelector<CounterState>('counter');

export const getSelectCount = createSelector(getSelectorCounterState, (state: CounterState) => state.count);
