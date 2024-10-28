import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    const getStartedBtn = document.querySelector('.sign-in-btn');
    const userProfile = document.querySelector('.user-profile');
    const userPhoto = document.getElementById("userPhoto");

    if (user) {
      // User is logged in
      const profilePhoto = user.photoURL;

      // Display user photo
      userPhoto.src = profilePhoto;
      userPhoto.alt = `${user.displayName}'s profile picture`;

      // Hide the "Get Started" button
      if (getStartedBtn) {
        getStartedBtn.style.display = 'none';
      }

      // Show the user profile section
      userProfile.style.display = 'block';
    } else {
      // User is not logged in
      if (getStartedBtn) {
        getStartedBtn.style.display = 'inline-block';
      }
      
      // Hide the user profile section
      userProfile.style.display = 'none';
    }
  });
});
