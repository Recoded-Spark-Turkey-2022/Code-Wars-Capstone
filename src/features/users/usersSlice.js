import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
// import { collection } from '@firebase/firestore';
// import { db } from '../../firebase-config';

// const usersCollectionRef = collection(db, 'users');

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (action) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      action.payload.email,
      action.payload.password
    );
    console.log(user);
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
