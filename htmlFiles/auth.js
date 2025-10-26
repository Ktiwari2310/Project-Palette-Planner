// auth.js
import { app } from "./Config.js";  // Import your Firebase app instance
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  Timestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Initialize Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Register a new user with email and password,
 * then save their profile to Firestore in 'users' collection.
 * @param {string} email
 * @param {string} password
 * @param {string} displayName
 * @param {string} phone (optional)
 * @returns Firebase user object
 */
export async function signUpUser(email, password, displayName, phone = "") {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Create Firestore user document
  await setDoc(doc(db, "users", user.uid), {
    userId: user.uid,
    email,
    displayName,
    phone,
    createdAt: Timestamp.now()
  });

  return user;
}

/**
 * Sign in existing user with email/password
 * @param {string} email
 * @param {string} password
 * @returns Firebase user object
 */
export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

/**
 * Sign out currently logged-in user
 */
export async function logoutUser() {
  await signOut(auth);
}

/**
 * Listen for authentication state changes (login/logout)
 * @param {function} callback - Receives the user object or null
 */
export function observeAuthState(callback) {
  onAuthStateChanged(auth, callback);
}
