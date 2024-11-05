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

// Function to show the login form
function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

// Function to show the register form
function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

// Initialize the page with the login form visible
document.addEventListener("DOMContentLoaded", showLoginForm);





