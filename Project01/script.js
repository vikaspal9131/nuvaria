// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function () {
//   if (password.getAttribute("type") === "password") {
//     password.setAttribute("type", "text"); // Change to text to show password
//     togglePassword.classList.replace("ri-focus-3-line", "ri-eye-off-line"); // Optionally change icon
//   } else {
//     password.setAttribute("type", "password"); // Change back to password to hide
//     togglePassword.classList.replace("ri-eye-off-line", "ri-focus-3-line"); // Revert icon
//   }
// });



// const text = "Welcome to VisionaryGen!";
// let index = 0;
// const speed = 100; // Speed of typing in milliseconds

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typewriter").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//     }
// }

// // Start the typewriter effect when the page loads
// window.onload = typeWriter;


const movingDiv = document.getElementById("movingDiv");
let position = 0; // Starting position
const speed = 2; // Speed of movement (pixels per frame)
const height = window.innerHeight; // Get the height of the window

function moveDiv() {
    position += speed; // Move down
    movingDiv.style.top = position + "px"; // Set new position

    // Reset position when it goes off the screen
    if (position > height) {
        position = -100; // Reset to above the viewport
    }

    requestAnimationFrame(moveDiv); // Repeat the function
}

// Start the movement
moveDiv();


// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

function slideToNext() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Reset to the first slide
    }
    updateSliderPosition();
}

// Function to update the slider position based on current index
function updateSliderPosition() {
    const slideHeight = slides[0].clientHeight; // Get height of the slide
    slider.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
}

// Automatically slide every 2 seconds
setInterval(slideToNext, 2000);
