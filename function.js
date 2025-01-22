// Ensure the DOM is ready before executing
document.addEventListener("DOMContentLoaded", () => {
	// Set the first image, title, and description on load
	const firstImage = images[0];
	document.getElementById("carouselTitle").textContent = firstImage.title;
	document.getElementById("carouselDescription").textContent =
		firstImage.description;
	document.getElementById("carouselImage").src = firstImage.src;
});

let currentIndex = 0; // Keeps track of the current image index

const images = [
	{
		src: "images/senior_1.png",
		title: "MATTEO  GIAMBARRES  2MCT",
		description:
			"Een erg interessante studierichting waar je veel kunt leren over diverse domeinen. Zo ontdek je wat je leuk vindt en kun je in het tweede jaar kiezen waarin je je wilt specialiseren.",
	},
	{
		src: "images/senior_2.png",
		title: "RAMON DE RAES 2MCT",
		description:
			"Een boeiende en veelzijdige studierichting waarin je een brede waaier aan vakken verkent. Ideaal om je interesses te ontdekken en jezelf breed te ontwikkelen!",
	},
	{
		src: "images/senior_3.png",
		title: "EREN SAHBAZ 2MCT",
		description:
			"Een leuke en uitdagende richting waar je niet alleen verschillende vakken verkent, maar ook werkt aan praktische vaardigheden zoals back-end ontwikkeling en het gebruik van technieken zoals async/await. Samenwerken met klasgenoten maakt het leerproces nog leuker en biedt een goede voorbereiding op de toekomst! ",
	},
	{
		src: "images/senior_4.png",
		title: "SOPHIA RAHMOUN 2CMT",
		description:
			"Een brede en goed gestructureerde opleiding waarin je veel ervaring opdoet in diverse domeinen. Je leert in een fijne omgeving met enthousiaste medestudenten en inspirerende docenten die je motiveren om het beste uit jezelf te halen!",
	},
];

// Function to change images and text when arrows are clicked
function changeImage(direction) {
	currentIndex += direction;

	if (currentIndex < 0) {
		currentIndex = images.length - 1; // Wrap around to the last image
	} else if (currentIndex >= images.length) {
		currentIndex = 0; // Wrap around to the first image
	}

	// Update image and text based on the current index
	let image = document.getElementById("carouselImage");
	let title = document.getElementById("carouselTitle");
	let description = document.getElementById("carouselDescription");

	image.src = images[currentIndex].src;
	title.innerHTML = images[currentIndex].title; // Use innerHTML to render <br> tags in title
	description.innerHTML = images[currentIndex].description; // Use innerHTML to render <br> tags in description
}
