import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH70JX7mpjOPC1h_g2GkQdyo-8FPqgsmY",
    authDomain: "reactecom-147aa.firebaseapp.com",
    projectId: "reactecom-147aa",
    storageBucket: "reactecom-147aa.appspot.com",
    messagingSenderId: "495253239854",
    appId: "1:495253239854:web:d3d0857bf8cb3f4af0c7bf"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const authconst = getAuth(firebaseApp)

export const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
// export { authconst, provider };

export default firebase;