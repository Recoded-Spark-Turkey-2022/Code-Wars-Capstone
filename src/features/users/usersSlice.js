import { createSlice } from '@reduxjs/toolkit';
// import { collection } from '@firebase/firestore';
// import { db } from '../../firebase-config';

// const usersCollectionRef = collection(db, 'users');

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    error: "",
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
