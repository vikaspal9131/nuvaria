const token = "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"
const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const btn = document.getElementById("btn")
const downloadBtn = document.getElementById("download-btn");




async function query() {
	image.src = "/assets/loaderr.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${token}` ,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}



const input = document.getElementById('input'); 

btn.addEventListener('click', async function () {
    const promptText = input.value.trim();


    if (!promptText) {
        alert("Please enter your prompt to get image 🚀"); 
        return;
    }

    downloadBtn.style.display = "none"; 

    try {
        const response = await query(); 
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;

       
        downloadBtn.style.display = "inline-block"; 
        downloadBtn.href = objectURL;               
        downloadBtn.download = "nuvaria.png";       
    } catch (error) {
        console.error("Error generating image:", error);
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

