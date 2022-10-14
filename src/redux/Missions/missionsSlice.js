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
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.mission_id === action.payload) {
        return { ...mission, joined: !mission.joined };
      }
      return mission;
    }),
  },

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
const { joinMission } = actions;
export { actions, joinMission };
export default reducer;
