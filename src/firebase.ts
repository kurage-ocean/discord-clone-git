import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFJ8bmJQh3LAi6CwQ1CYd-xKl_df1LoLQ",
  authDomain: "discord-clone-udemy-f16b6.firebaseapp.com",
  projectId: "discord-clone-udemy-f16b6",
  storageBucket: "discord-clone-udemy-f16b6.appspot.com",
  messagingSenderId: "946528269290",
  appId: "1:946528269290:web:df29d11855661797977893"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, db};