import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { async } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase-config';
// import { collection } from '@firebase/firestore';

// import { db } from '../../firebase-config';

// const usersCollectionRef = collection(db, 'users');

// export const signupUser = createAsyncThunk(
//   'users/signupUser',
//   async (action) => {
//     const user = await createUserWithEmailAndPassword(
//       auth,
//       action.payload.email,
//       action.payload.password
//     );
//     return user;
//   }
// );

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    const { email, password } = payload;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, { rejectWithValue }) => {
    const { email, password } = payload;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      return {id: user.uid, email: user.email};

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const createAccount = async (email, password) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const signupUser = createAsyncThunk(
//   "users/signupUser",
//   async ({ email, password }) => {
//     await createAccount(email, password);
//   }
// );

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    user: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
