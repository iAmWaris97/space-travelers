import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

// Actions
const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

// Thunks
export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  try {
    return await api.fetchMissions();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => (
        state
      ))
      .addCase(getMissions.fulfilled, (state, action) => (

        action.payload
      ))
      .addCase(getMissions.rejected, (state) => (
        state
      ));
  },
});

const { actions, reducer } = missionsSlice;
export { actions };
export default reducer;
