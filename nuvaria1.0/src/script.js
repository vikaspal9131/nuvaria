
window.addEventListener('load', function () {
  const loaderTimeout = 1500; 
  setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      content.style.display = 'block'; 
  }, loaderTimeout);
});


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true ,
  lerp:0.07
});




