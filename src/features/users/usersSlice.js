import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth, googleAuth, facebookAuth } from '../../firebase-config';

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (payload, { rejectWithValue }) => {
    const {
      email,
      password,
      firstName,
      lastName,
      birthdayDay,
      birthdayMonth,
      birthdayYear,
    } = payload;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email,
        firstName,
        lastName,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
      });
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
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUserWithGoogle = createAsyncThunk(
  'user/loginUserWithGoogle',
  async ({ rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, googleAuth);
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email ,
        name : user.displayName ,
        photoURL : user.photoURL
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


// export const Booking = createAsyncThunk(
//   'user/Booking',
//   async ({ rejectWithValue }) => {
//     try {
//       const docRef = doc(db, 'questionnaire', user.uid);
//       await setDoc(docRef, {
//         id: user.uid,
//         question,
//         choice,
//       });
//       return { id: user.uid};
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );



export const loginUserWithFacebook = createAsyncThunk(
  'user/loginUserWithFacebook',
  async ({ rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, facebookAuth);
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(loginUserWithGoogle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUserWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUserWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(loginUserWithFacebook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUserWithFacebook.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUserWithFacebook.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
