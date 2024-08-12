import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Code, ILogin, IRegistration, IUser } from '../../interfaces';
import { generateCodeId } from '../../utils';

const AuthEndpoints = {
  getCode: (codeId: number) => `/code/${codeId}`,
  users: '/users',
};

export const fetchCodeVerify = createAsyncThunk<Code>(
  'auth/fetchCodeVerify',
  async (_, { rejectWithValue }) => {
    try {
      const codeId = generateCodeId(1, 5);
      const response: AxiosResponse<Code> = await axios.get(
        AuthEndpoints.getCode(codeId),
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk<IUser | null, ILogin>(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const users: AxiosResponse<IUser[]> = await axios.get(
        AuthEndpoints.users,
      );

      const findUser = users.data.find(user => user.phone === payload.phone);

      if (!findUser) return null;

      return findUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const registration = createAsyncThunk<IUser, IRegistration>(
  'auth/registration',
  async (payload, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IUser> = await axios.post(
        AuthEndpoints.users,
        payload,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
