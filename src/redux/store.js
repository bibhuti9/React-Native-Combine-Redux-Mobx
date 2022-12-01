import {configureStore} from '@reduxjs/toolkit';
import appReducer from './appReduxer';

export const reduxStore = configureStore({
  reducer: {
    apiReducer: appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
