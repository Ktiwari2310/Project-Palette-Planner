// auth.js
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { app } from "./Config.js";

const auth = getAuth(app);
const db = getFirestore(app);

export async function signUpUser(email, password, name, phone) {
  // Firebase Auth signup
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Create Firestore user document
  await setDoc(doc(db, "users", user.uid), {
    Name: name,
    "E-mail": email,
    "Phone number": phone,
    createdAt: new Date()
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
