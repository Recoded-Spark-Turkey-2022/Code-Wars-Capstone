import { createAsyncThunk, createSlice , } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup ,  updatePassword , updateEmail , deleteUser} from 'firebase/auth';
import { doc, setDoc , getDoc , updateDoc , deleteDoc  } from 'firebase/firestore';
import {ref , uploadBytesResumable , getDownloadURL} from "firebase/storage";
import { db, auth, googleAuth, facebookAuth , storage } from '../../firebase-config';


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
        photoURL : "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" , 
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        EducationLevel : null ,
        Hobbies : null ,
        FamilySize : null ,
        Gender : null ,
        PhoneNumber : null ,
        Idimage : null   

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
        Idimage : null
        
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







// this funciton to update the user profile information 
export const updatechange = createAsyncThunk("user/updatechange",

async (payload , { rejectWithValue , getState } ) => {
  console.log(payload);
  try {
    const state = getState();
const {id ,email, name ,photoURL, birthdayDay,birthdayMonth,birthdayYear ,EducationLevel , Hobbies,FamilySize 
  ,Gender , PhoneNumber ,Idimage , Password  } = payload;
   updatePassword(auth.currentUser, Password).then().catch((error) => {
    rejectWithValue(error.message);
  });

    updateEmail(auth.currentUser, email).then(

 ).catch((error) => {
    rejectWithValue(error.message);
  });
   // sending photo to firestorage 
  let downloadURL = state.users.user.Idimage ;
  if(Idimage !== undefined){
    const imagesRef = ref(storage, id);
const uploadTask =  uploadBytesResumable(imagesRef, Idimage);
  downloadURL = await  getDownloadURL(uploadTask.snapshot.ref).then((download) => {
return download ;
});
  }
  let downloadprofilepic = state.users.user.Idimage ;
  if(photoURL !== undefined){
    const imagesRef = ref(storage, name);
const uploadTask =  uploadBytesResumable(imagesRef, photoURL);
downloadprofilepic = await  getDownloadURL(uploadTask.snapshot.ref).then((download) => {
return download ;
});
  }

  // sending data to firestore 
const   docRef =   doc(db, 'users', id);
  await updateDoc(docRef, {
  id ,
  email,
  name ,
  photoURL : downloadprofilepic,
  birthdayDay,
  birthdayMonth,
  birthdayYear ,
  EducationLevel ,
  Hobbies,
  FamilySize ,
  Gender ,
  PhoneNumber ,
  Idimage :downloadURL 

}

)

const docSnap = await getDoc(docRef);
return  docSnap.data() ;
}
catch(error){
  return rejectWithValue(error);
}}) ;


// delete user 
export const DeleteAccount = createAsyncThunk("user/deleteUser", async ( userid,   {rejectWithValue}) =>{
    const user = auth.currentUser;
  await deleteUser(user).then(() => {
    console.log("user deleted")
  }).catch((error) => {
    rejectWithValue(error.message)
  });

    
  await deleteDoc(doc(db, "users", userid.id));
}


)

export const BookingInfo = createAsyncThunk(
  'answers/booking',
  async ( payload , { rejectWithValue  }) => {
    try {
     const docRef =  doc(db, 'Answer' , "12346");
      await setDoc(docRef, {
      Answer : payload
      });
      const docSnap = await getDoc(docRef);
      return  docSnap.data() ;
      }
      catch(error){
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
    SurveyAnswer :[]
  },
  reducers : {
    AddAnswer: (state, action) => {
    state.SurveyAnswer.push(action.payload)}},
  


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
      console.log(action.payload);
    });
    builder.addCase(updatechange.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(BookingInfo.pending, () => {
     
    });
    builder.addCase(BookingInfo.fulfilled, (state, action) => {
       console.log(action.payload);
    });
    builder.addCase(BookingInfo.rejected, () => {
      console.log("rejecting pending")
    });
  },
}); 

export default usersSlice.reducer;
export const {AddAnswer} = usersSlice.actions ;
