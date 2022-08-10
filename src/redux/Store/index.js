import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../Slices/LoginSlice';

const store = configureStore({
  reducer: {loginReducer: loginReducer},
});

export default store;
