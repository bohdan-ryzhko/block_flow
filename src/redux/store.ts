import { combineReducers, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { authReducer } from './auth';

axios.defaults.baseURL = 'https://64afdd57c60b8f941af4c694.mockapi.io/api/v1';

export const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
