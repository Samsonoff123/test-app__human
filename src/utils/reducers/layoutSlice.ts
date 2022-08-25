import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface LayoutState {
  widthClaimPanel: number;
  splitterPosition: number;
}

const initialState: LayoutState = {
  widthClaimPanel: 300,
  splitterPosition: 0,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.splitterPosition += action.payload;
    },
   }
});

export const { incrementByAmount } = layoutSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWidthClaimPanel = (state: RootState) => state.layout.widthClaimPanel;

export default layoutSlice.reducer;
