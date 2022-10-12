import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
// import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './Rockets/rocketsSlice';

// root Reducer
const rootReducer = combineReducers({
  // missions: missionsReducer,
  rockets: rocketsReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
);

export default store;
