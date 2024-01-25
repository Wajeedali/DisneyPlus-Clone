import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyABJ_s0aFtQS42o4GZrU2Ny7tEfTj_p3ok",
  authDomain: "disneyplus-clone-55964.firebaseapp.com",
  projectId: "disneyplus-clone-55964",
  storageBucket: "disneyplus-clone-55964.appspot.com",
  messagingSenderId: "1012859951955",
  appId: "1:1012859951955:web:b219bf02e8d7f2494c1fa6",
  measurementId: "G-CQX5WHQS4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;