import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  isLoading: boolean;
}

const initialAppState: IAppState = {
  isLoading: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setAppLoading: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAppLoading } = appSlice.actions;
export default appSlice.reducer;
