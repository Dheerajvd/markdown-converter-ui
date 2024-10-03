import { createSlice } from '@reduxjs/toolkit';

export const markdownSlice = createSlice({
  name: 'markdown',
  initialState: {
    content: '',
  },
  reducers: {
    updateMarkdown: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { updateMarkdown } = markdownSlice.actions;
export default markdownSlice.reducer;
