const token = "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"
const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const btn = document.getElementById("btn")




async function query() {
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

btn.addEventListener('click' , async function () {
	query().then((response) => {
		const objectURL = URL.createObjectURL(response)
		image.src = objectURL
	});
})
