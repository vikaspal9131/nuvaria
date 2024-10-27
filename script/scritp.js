const texts = [
  "Welcome to nuvaria.AI Generate image in seconds...  ",
  "Effortless Image Creation – Explore Endless Visual Styles.",
  "Transform Your Imagination into Reality in Just Seconds. ",
  "Discover the Power of Instant AI Image Generation."
];
let index = 0;
let textIndex = 0;
const speed = 35; 
const delay = 1000; 

function typeWriter() {
  const currentText = texts[textIndex]; 
  if (index < currentText.length) {
      document.getElementById("typewriter").innerHTML += currentText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
  } else {
      
      setTimeout(() => {
          document.getElementById("typewriter").innerHTML = ""; 
          index = 0; 
          textIndex = (textIndex + 1) % texts.length;
          typeWriter(); 
      }, delay);
  }
}
window.onload = typeWriter;



// locomotive js for smooth scrolling 

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true ,
  lerp:0.06
});


// Function to display user profile
async function displayUserProfile() {
  const user = auth.currentUser; // Get the current user
  
  if (user) {
      const userRef = doc(db, "users", user.uid); // Reference to the user's document in Firestore
      const userDoc = await getDoc(userRef); // Get the document

      if (userDoc.exists()) {
          const userData = userDoc.data(); // Retrieve user data
          document.getElementById("userName").innerText = `Name: ${userData.name}`;
          document.getElementById("userEmail").innerText = `Email: ${userData.email}`;
          document.getElementById("userPhoto").src = userData.photoURL || ""; // Set user photo
      } else {
          console.log("No such user document!");
      }
  } else {
      console.log("No user is currently signed in.");
  }
}

// Call the function to display user profile when the page loads
window.onload = displayUserProfile;
