const texts = [
  "Welcome to VisionaryGen! lorem orem dolor  ",
  "Create stunning images instantly. sit amet, c",
  "Generate high-quality videos in seconds onsectetur ",
  "Unleash your creativity with AI. adipisicing elit. Officiis aliq."
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
