import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_qvMpMyunjtChJUijZTxFvHsD26KqFX4",
    authDomain: "nuvaria-cec9c.firebaseapp.com",
    projectId: "nuvaria-cec9c",
    storageBucket: "nuvaria-cec9c.appspot.com",
    messagingSenderId: "461979800408",
    appId: "1:461979800408:web:d38a2a8013dc3155768b2d"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//   auth.languageCode = 'en';
// const db = getFirestore(app);  

const provider = new GoogleAuthProvider();


const googleBtn = document.querySelector('.google-btn');

googleBtn.addEventListener("click" , () => {
  signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "/"
   
  }).catch((error) => {
 
    const errorCode = error.code;
    const errorMessage = error.message;
 
  });
})

  const user = auth.currentUser;

  function updateUserProfile(user){
    const profilePhoto = user.photoURL ;
    const photo = document.querySelector('#user-profile');
  
  }

