const token = "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";
const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const btn = document.getElementById("btn");
const downloadBtn = document.getElementById("download-btn");
const loader = document.querySelector(".loader-container"); 
const showTime = document.querySelector("#time");
const modelName = document.querySelector("#modelName");

async function query() {
    const startTime = performance.now(); // Start time tracking

    const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "inputs": inputTxt.value }),
        }
    );

    const endTime = performance.now(); // End time tracking
    const timeTaken = (endTime - startTime).toFixed(2); // Calculate time in ms

    showTime.innerText = `${timeTaken}ms`; // Display in the element
    modelName.innerText = "Hugging face"

    const result = await response.blob();
    return result;
}


btn.addEventListener("click", async function () {
    const promptText = inputTxt.value.trim();

    if (!promptText) {
        alert("Please enter your prompt to get an image 🚀");
        return;
    }

    downloadBtn.style.display = "none"; 
    image.style.display = "none"; 
    loader.style.display = "flex"; 
   

    try {
        const response = await query();
        const objectURL = URL.createObjectURL(response);
        
        image.src = objectURL;
        image.style.display = "block"; 
        loader.style.display = "none"; 

        downloadBtn.style.display = "inline-block";
        downloadBtn.href = objectURL;
        downloadBtn.download = "nuvaria.png";
    } catch (error) {
        console.error("Error generating image:", error);
        loader.style.display = "none"; 
    }
});






document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-body1 button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
    
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = ''; 
      });
      button.classList.add('active');
      button.style.backgroundColor = button.id === 'btn-stander' ? '#BC4B21' : ' #BC4B21';
    });
  });
});