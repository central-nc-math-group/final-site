import firebase from "firebase";

import FirebaseContext, { withFirebase } from "./context";
import "firebase/auth";

export { FirebaseContext, withFirebase };

const firebaseConfig = {
  apiKey: "AIzaSyAdGSh3AX1ZIlSLsIWowO4lNIa9CJMCQ08",
  authDomain: "cncm-website.firebaseapp.com",
  projectId: "cncm-website",
  messagingSenderId: "405298212702",
  appId: "1:405298212702:web:12f84c73f1c9f895",
  measurementId: "G-S50LLXSZNS",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const resendEmailVerification = async (authUser) => {
  //
};

export const passwordReset = async (email) => {
  //
};

export const signIn = async (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((_) => ({ success: true }))
    .catch((error) => {
      console.log(error.code);
      return understandLoginError(error.code);
    });
};

export const createUser = async (username, password, email) => {
  // Do some fetch stuff
  return;

  return auth
    .signInWithEmailAndPassword(email, password)
    .then((_) => ({ success: true }))
    .catch((error) => {
      console.log(error.code);
      return understandLoginError(error.code);
    });
};

export const understandLoginError = (e) => {
  const email = "cncmathgroup@gmail.com";
  switch (e) {
    case "auth/invalid-email": // the only way to have an invalid email is if the username maps to null, i.e. no user found
    case "auth/user-not-found":
      return "It seems that you do not have an account. Please sign up and try again.";
    case "auth/user-disabled":
      return `Your account has been disabled. Email us at ${email} to resolve this.`;
    case "auth/wrong-password":
      return "The password is incorrect. Please try to type the password correctly.";
    case "auth/too-many-requests":
      return "There were too many requests from this device. Wait 5 minutes, refresh the page, and try again.";
    default:
      return "This looks like an error on our side. Please refresh the page and try again, or contact us with the issue!";
  }
};

export const understandSignupError = (e) => {
  switch (e) {
    case "auth/email-already-exists":
      return "This email address is already in use. Please use an alternate address.";
    case "auth/invalid-user-token":
      return "It seems like your token has expired. Refresh the page and try again.";
    case "auth/network-request-failed":
      return "There was a network error. Refresh the page and try again.";
    case "auth/too-many-requests":
      return "There were too many requests from this device. Wait 5 minutes, refresh the page, and try again.";
    case "auth/user-token-expired":
      return "It seems that your token has expired. Refresh the page and try again.";
    case "auth/user-not-found":
      return "It seems that you do not have an account. Please sign up and try again.";
    case "auth/user-disabled":
      return "Your account has been disabled. Email us at `email` to resolve this.";
    case "auth/web-storage-unsupported":
      return "We use IndexedDB to store your credentials. If you have disabled this, please re-enable it so we can keep you logged in.";
    case "auth/no-empty-username":
      return "You can't sign up with an empty username. Please enter a username and try again.";
    case "auth/incorrect-username-syntax":
      return "Usernames can only contain alphanumeric characters and underscores. Make sure that your username only contains such characters";
    case "auth/username-already-exists":
      return "The username already exists. Please try to input a different username.";
    case "auth/invalid-email":
      return "The email is invalid. Please try again with a valid email.";
    case "auth/username-too-long":
      return "The username is too long. Please enter a username of at most 40 characters.";
    case "auth/email-too-long":
      return "The email is too long. Please enter a email of at most 60 characters.";
    case "auth/password-too-short":
      return "The password is too short. Please make sure that the password is at least 8 characters long";
    case "auth/incorrect-password-format":
      return "The password must contain at least one captial letter, one lowercase letter, one number, and one special character";
    case "auth/invalid-grade":
      return "The grade must be a positive integer";
    default:
      return "This looks like an error on our side. Please refresh the page and try again, or contact us with the issue!";
  }
};
