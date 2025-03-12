window.addEventListener('load', function () {
  const loaderTimeout = 1000; 
  setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
      content.style.display = 'block'; 
  }, loaderTimeout);
});


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



function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}


document.addEventListener("DOMContentLoaded", showLoginForm);