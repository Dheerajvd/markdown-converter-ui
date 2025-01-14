import { configureStore } from '@reduxjs/toolkit';
import markdownReducer from './markdownSlice';

export const store = configureStore({
  reducer: {
    markdown: markdownReducer,
  },
});