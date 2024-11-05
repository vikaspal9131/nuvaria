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





btn.addEventListener('click', async function () {
	downloadBtn.style.display = "none";

	query().then((response) => {
		const objectURL = URL.createObjectURL(response);
		image.src = objectURL;



		// Enable and set up the download button
		downloadBtn.style.display = "inline-block"; // Show the download button
		downloadBtn.href = objectURL;               // Set the download URL
		downloadBtn.download = "nuvaria.png"; // Default file name for download
	});

})



document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-body1 button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove the active class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = ''; // Reset background color
      });

      // Add the active class to the clicked button and change its background
      button.classList.add('active');
      button.style.backgroundColor = button.id === 'btn-stander' ? '#BC4B21' : ' #BC4B21';
    });
  });
});

