import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"; // Import Firestore

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
  auth.languageCode = 'en';
const db = getFirestore(app); 

const provider = new GoogleAuthProvider();


const googleBtn = document.querySelector('.google-btn');

googleBtn.addEventListener("click" , () => {
  signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href ="/docs/index.html"
   
  }).catch((error) => {
 
    const errorCode = error.code;
    const errorMessage = error.message;
 
  });
})


async function displayUserProfile() {
  const user = auth.currentUser;

  if (user) {
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
          const userData = userDoc.data();
          document.getElementById("userName").innerText = `Name: ${userData.name}`;
          document.getElementById("userEmail").innerText = `Email: ${userData.email}`;
          document.getElementById("userPhoto").src = userData.photoURL || "";
          document.querySelector('.user-profile').style.display = 'block'; // Show profile
          loginButton.style.display = 'none'; // Hide login button
      }
  } else {
      console.log("No user is currently signed in.");
  }
}

// Call displayUserProfile when the page loads
window.onload = () => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
      const user = JSON.parse(storedUser);
      auth.signInWithCredential(GoogleAuthProvider.credential(user.stsTokenManager.accessToken)); // Re-authenticate using the token
      displayUserProfile(); // Display the user profile if logged in
  } else {
      displayUserProfile(); // Just to reset if not logged in
  }
};