import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  deleteUser,
  // sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  db,
  auth,
  googleAuth,
  facebookAuth,
  storage,
} from '../../firebase-config';

// start of signup:
export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (payload, { rejectWithValue }) => {
    const { email, password, birthdayDay, birthdayMonth, birthdayYear } =
      payload;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // await sendEmailVerification(auth.currentUser);

      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email,
        name: `${payload.firstName} ${payload.lastName}`,
        photoURL:
          'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg',
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        EducationLevel: null,
        Hobbies: null,
        FamilySize: null,
        Gender: null,
        PhoneNumber: null,
        Idimage:
          'https://www.boredpanda.com/blog/wp-content/uploads/2022/05/6295fa7e592c4_8488ld0__700.jpg',
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of signup

// Start of Login:
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, { rejectWithValue }) => {
    const { email, password } = payload;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      // if (user.emailVerified === false) {
      //   return { error: 'Email is Not Verified' };
      // } 

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Login.

// Sign in with Google:
export const loginUserWithGoogle = createAsyncThunk(
  'user/loginUserWithGoogle',
  async ({ rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, googleAuth);
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        birthdayDay: null,
        birthdayMonth: null,
        birthdayYear: null,
        EducationLevel: null,
        Hobbies: null,
        FamilySize: null,
        Gender: null,
        PhoneNumber: null,
        Idimage:
          'https://www.boredpanda.com/blog/wp-content/uploads/2022/05/6295fa7e592c4_8488ld0__700.jpg',
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Sign-in with Google.

// Sign in with Facebook:
export const loginUserWithFacebook = createAsyncThunk(
  'user/loginUserWithFacebook',
  async ({ rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, facebookAuth);
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// End of Sign-in with Facebook.

// Start of Logout User:
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    console.log('inside logout');
    try {
      await signOut(auth);
      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// End of Logout User:

const updateUserPassword = createAsyncThunk(
  'user/updateUserPsswordorEmail',
  async (playload, { rejectWithValue }) => {
    const { password } = playload;

    await updatePassword(auth.currentUser, password)
      .then(console.log('password changed'))
      .catch((error) => {
        rejectWithValue(error.message);
      });
  }
);

const UrlImageid = createAsyncThunk('user/UrlPhoto', async (playload) => {
  const { Idimage, id } = playload;

  const imagesRef = ref(storage, id);
  const uploadTask = uploadBytesResumable(imagesRef, Idimage);
  const url = await getDownloadURL(uploadTask.snapshot.ref).then((download) => {
    return download;
  });
  return url;
});

const UrlIProfilePic = createAsyncThunk('user/UrlPhoto', async (playload) => {
  const { photoURL, name } = playload;

  const imagesRef = ref(storage, name);
  const uploadTask = uploadBytesResumable(imagesRef, photoURL);
  const url = getDownloadURL(uploadTask.snapshot.ref).then((download) => {
    return download;
  });
  return url;
});

// this funciton to update the user profile information
export const updatechange = createAsyncThunk(
  'user/updatechange',

  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      const {
        id,
        name,
        photoURL,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        EducationLevel,
        Hobbies,
        FamilySize,
        Gender,
        PhoneNumber,
        Idimage,
        Password,
      } = payload;
      if (Password.length !== 0) {
        await dispatch(updateUserPassword(Password));
      }
      // sending photo to firestorage
      let downloadURL = state.users.user.Idimage;
      if (Idimage !== undefined) {
        const url = await dispatch(UrlImageid({ Idimage, id }));
        downloadURL = url.payload;

        console.log(downloadURL);
      }

      let downloadprofilepic = state.users.user.photoURL;
      console.log(downloadprofilepic);

      console.log(photoURL);
      if (photoURL !== downloadprofilepic) {
        const url = await dispatch(UrlIProfilePic({ photoURL, name }));
        downloadprofilepic = url.payload;
        console.log(downloadprofilepic);
      }

      console.table(
        id,
        name,
        downloadprofilepic,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        EducationLevel,
        Hobbies,
        FamilySize,
        Gender,
        PhoneNumber,
        downloadURL
      );
      // sending data to firestore
      const docRef = doc(db, 'users', id);
      await setDoc(docRef, {
        id,
        name,
        photoURL: downloadprofilepic,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        EducationLevel,
        Hobbies,
        FamilySize,
        Gender,
        PhoneNumber,
        Idimage: downloadURL,
      });

      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete user
export const DeleteAccount = createAsyncThunk(
  'user/deleteUser',
  async (userid, { rejectWithValue }) => {
    const user = auth.currentUser;
    await deleteUser(user)
      .then(() => {
        console.log('user deleted');
      })
      .catch((error) => {
        rejectWithValue(error.message);
      });

    await deleteDoc(doc(db, 'users', userid.id));
  }
);

export const BookingInfo = createAsyncThunk(
  'answers/booking',
  async (payload, { rejectWithValue, getState }) => {
    const userid = getState().users.user.id;
    console.log(userid);
    try {
      const docRef = doc(db, 'Book an Appointment', userid);
      await setDoc(docRef, {
        Answer: payload,
      });
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
function generateRandomString() {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 28; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const contactForm = createAsyncThunk(
  'contactForm/form',
  async (payload, { rejectWithValue }) => {
    const randomid = generateRandomString();
    const { details, email, fullName, selectedOption } = payload;

    try {
      const docRef = doc(db, 'Contact Us', randomid);
      await setDoc(docRef, {
        details,
        email,
        fullName,
        selectedOption,
      });
      return 0;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createTherapistProfile = createAsyncThunk(
  'therapist/signuptherapistUser',
  async (payload, { rejectWithValue }) => {
    const { Username, Email, City, Licensenumber, Password } = payload;
    //  console.table(Username,
    //   Email,
    //   City,
    //   Licensenumber,
    //   Password)
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );

      const docRef = doc(db, 'therapists', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        Username,
        Email,
        City,
        Licensenumber,
      });
      return { id: user.uid, Email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    userlogin: false,
    user: {},
    error: null,
    SurveyAnswer: [],
    signedup: false,
  },
  reducers: {
    AddAnswer: (state, action) => {
      state.SurveyAnswer.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    // Signup Cases:
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.signedup = true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    // Login Cases:
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        console.log(action.payload);
        state.user = null;
        state.userlogin = false;
        state.error = action.payload.error;
      } else {
        state.user = action.payload;
        state.userlogin = true;
        state.error = null;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
      console.log(action.payload);
    });
    // Login with Google Cases:
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
    // Login with Facebook Cases:
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
    // Logout Cases:
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = {};
      state.error = null;
      state.userlogin = false;
      state.signedup = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    // Update Profile Cases:
    builder.addCase(updatechange.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatechange.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      console.log(action.payload);
    });
    builder.addCase(updatechange.rejected, () => {
      console.log('reject Updatechange');
    });
    builder.addCase(BookingInfo.pending, () => {});
    builder.addCase(BookingInfo.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(BookingInfo.rejected, () => {
      console.log('rejecting pending');
    });

    builder.addCase(updateUserPassword.fulfilled, () => {
      console.log('Password');
    });
    builder.addCase(updateUserPassword.rejected, () => {
      console.log('rejecting change password');
    });

    builder.addCase(UrlImageid.fulfilled, () => {
      console.log('urlmageid seuccfull ');
    });
    builder.addCase(UrlImageid.rejected, () => {
      console.log('rejecting upload UrlImageid');
    });

    builder.addCase(createTherapistProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTherapistProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(createTherapistProfile.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
export const { AddAnswer } = usersSlice.actions;
