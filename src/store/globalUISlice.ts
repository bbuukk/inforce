import { createSlice } from '@reduxjs/toolkit';

const globalUISlice = createSlice({
  name: 'globalUI',
  initialState: {
    activeModal: null
  },
  reducers: {
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    }
  }
});

export const { setActiveModal } = globalUISlice.actions;
export default globalUISlice.reducer;
