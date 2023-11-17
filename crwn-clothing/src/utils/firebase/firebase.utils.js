import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
onAuthStateChanged} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_JYpyODfoN9cH8YETh6saJa2H1JvKSMM",
  authDomain: "crwn-clothing-db-87391.firebaseapp.com",
  projectId: "crwn-clothing-db-87391",
  storageBucket: "crwn-clothing-db-87391.appspot.com",
  messagingSenderId: "1068365410098",
  appId: "1:1068365410098:web:6ed70b6fbd949caf3eb12b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
}