import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import AxiosInstance from '../../Axios';// api caliing instance of axios
// import API from '../../constants/API'; // api endpoints

// ****************************************************************//

// we can use createAsyncThunk function for api calling

// export const userLogIn = createAsyncThunk(
//   'userLogIn',
//   async (data, {rejectWithValue}) => {
//     try {
//       const response = await AxiosInstance.post(API.LOGIN, {...data});
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   },
// );

const login = createSlice({
  name: 'login',
  initialState: {
    userData: {},
    pending: false,
    success: false,
    error: false,
  },
  reducers: {
    logOutUser: state => {
      state.userData = {};
    },
    loginError: (state, action) => {
      state.success = false;
      state.pending = false;
      state.error = action.payload;
    },
    resetlogin: state => {
      state.success = false;
      state.error = false;
    },
  },

  //   **************************************//
  // can be used with createAsyncThunk function
  //   extraReducers: {
  //     [userLogIn.fulfilled]: (state, action) => {
  //       state.userData = action.payload;
  //       state.success = true;
  //       state.pending = false;
  //       state.error = false;
  //     },
  //     [userLogIn.pending]: state => {
  //       state.pending = true;
  //       state.error = false;
  //     },

  //     [userLogIn.rejected]: (state, action) => {
  //       state.success = false;
  //       state.pending = false;
  //       state.error = action.payload;
  //     },
  //   },
});
export const {resetlogin, logOutUser} = login.actions;
const loginReducer = login.reducer;
export default loginReducer;
