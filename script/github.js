import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";



// const firebaseConfig = {
//   apiKey: "AIzaSyA_qvMpMyunjtChJUijZTxFvHsD26KqFX4",
//   authDomain: "nuvaria-cec9c.firebaseapp.com",
//   projectId: "nuvaria-cec9c",
//   storageBucket: "nuvaria-cec9c.appspot.com",
//   messagingSenderId: "461979800408",
//   appId: "1:461979800408:web:d38a2a8013dc3155768b2d"
// };


//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

//   // Set up GitHub Provider
//   const githubProvider = new firebase.auth.GithubAuthProvider();

//   // GitHub Login Button
//   const githubBtn = document.querySelector('.github-btn');


//   // githubBtn.addEventListener('click' , () => {
//   //   console.log("hwlllewhjrokwe")
//   // })

//   githubBtn.addEventListener('click', () => {
   
//       signInWithPopup(auth, githubProvider)
//           .then((result) => {
//               const credential = GithubAuthProvider.credentialFromResult(result);
//               const token = credential.accessToken;
//               const user = result.user;

//               // User Info
//               console.log("GitHub User:", user);
//               document.querySelector('#user-profile').src = user.photoURL;
//               document.querySelector('#user-profile').style.display = 'block';
//               document.querySelector('#user-name').textContent = `Welcome, ${user.displayName}`;

//               // Redirect to another page
//               window.location.href = 'index.html';
//           })
//           .catch((error) => {
//               const errorCode = error.code;
//               const errorMessage = error.message;
//               console.error(`Error [${errorCode}]: ${errorMessage}`);
//           });
//   });

//   // Check if User is Logged In
//   onAuthStateChanged(auth, (user) => {
//       if (user) {
//           console.log("User is signed in:", user);
//       } else {
//           console.log("No user is signed in.");
//       }
//   });

const { initializeApp } = firebase;
const { getAuth, GithubAuthProvider, signInWithPopup, onAuthStateChanged } = firebase.auth;

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_qvMpMyunjtChJUijZTxFvHsD26KqFX4",
    authDomain: "nuvaria-cec9c.firebaseapp.com",
    projectId: "nuvaria-cec9c",
    storageBucket: "nuvaria-cec9c.appspot.com",
    messagingSenderId: "461979800408",
    appId: "1:461979800408:web:d38a2a8013dc3155768b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set up GitHub Provider
const provider = new GithubAuthProvider();

// GitHub Login Button
const githubBtn = document.querySelector('.github-btn');

githubBtn.addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Display User Info
        console.log("GitHub User:", user);
        document.querySelector('#user-profile').src = user.photoURL;
        document.querySelector('#user-profile').style.display = 'block';
        document.querySelector('#user-name').textContent = `Welcome, ${user.displayName}`;

        // Redirect to another page
        window.location.href = 'index.html';
    } catch (error) {
        console.error(`Error during GitHub login: ${error.message}`);
    }
});

// Check if User is Already Logged In
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);
    } else {
        console.log("No user is signed in.");
    }
});