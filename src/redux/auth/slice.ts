import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCodeVerify, login, registration } from './thunks';
import { AuthSlice, IRegistration } from '../../interfaces';

const initialState: AuthSlice = {
  loading: false,
  error: null,
  code: null,
  registrationData: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegistrationData(state, action: PayloadAction<IRegistration | null>) {
      state.registrationData = action.payload;
    },
    resetAuthData(state) {
      state.code = null;
      state.registrationData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCodeVerify.fulfilled, (state, { payload }) => {
        state.code = payload;
      })
      .addMatcher(
        isAnyOf(fetchCodeVerify.pending, registration.pending, login.pending),
        state => {
          state.loading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchCodeVerify.fulfilled,
          registration.fulfilled,
          login.fulfilled,
        ),
        state => {
          state.loading = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(registration.fulfilled, login.fulfilled),
        (state, { payload }) => {
          state.user = payload;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchCodeVerify.rejected,
          registration.rejected,
          login.rejected,
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.error;
        },
      );
  },
});

export const { setRegistrationData, resetAuthData } = authSlice.actions;
export const authReducer = authSlice.reducer;
