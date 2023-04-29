import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDuCOqy1OIYctaQ6AkVVVOe09amwVkAIeY",
  authDomain: "react-f6fe3.firebaseapp.com",
  projectId: "react-f6fe3",
  storageBucket: "react-f6fe3.appspot.com",
  messagingSenderId: "1035206135443",
  appId: "1:1035206135443:web:b6de031d71ad84d682c766",  
  measurementId: "G-X44Y3SWB3D"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider}
