import { createAsyncThunk, createSlice , } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import { doc, setDoc , getDoc , updateDoc   } from 'firebase/firestore';
import { db, auth, googleAuth, facebookAuth } from '../../firebase-config';

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (payload, { rejectWithValue }) => {
    const {
      email,
      password,
      /* firstName,
      lastName, */
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
        name: `${payload.firstName} ${payload.lastName}` ,
        photoURL : null , 
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        EducationLevel : null ,
        Hobbies : null ,
        FamilySize : null ,
        Gender : null ,
        PhoneNumber : null ,  

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
      
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
    
      return  docSnap.data()  ;
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
        photoURL : user.photoURL , 
        birthdayDay: null,
        birthdayMonth : null,
        birthdayYear : null,
        EducationLevel : null ,
        Hobbies : null ,
        FamilySize : null ,
        Gender : null ,
        PhoneNumber : null ,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
export const updatechange = createAsyncThunk("user/updatechange",
async (payload) => {
const {id , user} = payload;

console.log(id);
console.log(user);

const docRef = doc(db, 'users', id);

await updateDoc(docRef, {
  id ,
  email: user.email ,
  name : user.displayName ,
  photoURL : user.photoURL , 
  birthdayDay: user.birthdayDay,
  birthdayMonth : user.birthdayMonth,
  birthdayYear : user.birthdayYear,
  EducationLevel : user.Education ,
  Hobbies : user.Hobbies ,
  FamilySize : user.FamilySize ,
  Gender : user.Gender ,
  PhoneNumber : user.PhoneNumber ,
  
});


}) ;





const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    userlogin: false,
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
      state.userlogin = true;
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
    builder.addCase(updatechange.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatechange.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(updatechange.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
