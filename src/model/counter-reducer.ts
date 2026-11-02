import {createAction, createReducer} from "@reduxjs/toolkit";

type CounterState = {
  maxValue: number
  startValue: number
  count: number
  isSettingsChanged: boolean
}

const initialState: CounterState = {
  maxValue: 5,
  startValue: 0,
  count: 0,
  isSettingsChanged: false,
}

export const setMaxValueAC = createAction<number>('counter/setMaxValue');
export const setStartValueAC = createAction<number>('counter/setStartValue');
export const setCountAC = createAction<number>('counter/setCount');
export const setIsSettingsChangedAC = createAction<boolean>('counter/setIsSettingsChanged');
export const setSettingsAC = createAction('counter/setSettings');

export const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(setMaxValueAC, (state, action) => {
      state.maxValue = action.payload;
    })
    .addCase(setStartValueAC, (state, action) => {
      state.startValue = action.payload;
    })
    .addCase(setCountAC, (state, action) => {
      state.count = action.payload;
    })
    .addCase(setIsSettingsChangedAC, (state, action) => {
      state.isSettingsChanged = action.payload;
    })
    .addCase(setSettingsAC, (state) => {
      state.count = state.startValue;
      state.isSettingsChanged = false;
    });
})