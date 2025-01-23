// Ensure the DOM is ready before executing
document.addEventListener("DOMContentLoaded", () => {
	// Set the first image, title, and description on load
	const firstImage = images[0];
	const imageElement = document.getElementById("carouselImage");
	const titleElement = document.getElementById("carouselTitle");
	const descriptionElement = document.getElementById("carouselDescription");

	imageElement.src = firstImage.src;
	imageElement.setAttribute("data-index", 0); // Set the initial index
	titleElement.innerHTML = firstImage.title;
	descriptionElement.innerHTML = firstImage.description;
});

document.addEventListener("DOMContentLoaded", () => {
	images.forEach((imageData) => {
		const img = new Image();
		img.src = imageData.src; // Preload each image
	});

	// Set the first image, title, and description on load
	const firstImage = images[0];
	const imageElement = document.getElementById("carouselImage");
	const titleElement = document.getElementById("carouselTitle");
	const descriptionElement = document.getElementById("carouselDescription");

	imageElement.src = firstImage.src;
	imageElement.setAttribute("data-index", 0); // Set the initial index
	titleElement.innerHTML = firstImage.title;
	descriptionElement.innerHTML = firstImage.description;
});

let currentIndex = 0; // Keeps track of the current image index

const images = [
	{
		src: "images/senior_1.png",
		title: "MATTEO  GIAMBARRES  STUDENT 2MCT",
		description:
			"Een erg interessante studierichting waar je veel kunt leren over diverse domeinen. Zo ontdek je wat je leuk vindt en kun je in het tweede jaar kiezen waarin je je wilt specialiseren.",
	},
	{
		src: "images/senior_2.png",
		title: "RAMON DE&nbsp;RAES STUDENT&nbsp;2MCT",
		description:
			"Een boeiende en veelzijdige studierichting waarin je een brede waaier aan vakken verkent. Ideaal om je interesses te ontdekken en jezelf breed te ontwikkelen!",
	},
	{
		src: "images/senior_3.png",
		title: "EREN SAHBAZ STUDENT&nbsp;2MCT",
		description:
			"Een leuke en uitdagende richting waar je niet alleen verschillende vakken verkent, maar ook werkt aan praktische vaardigheden zoals back-end ontwikkeling en het gebruik van technieken zoals async/await.",
	},
	{
		src: "images/senior_4.png",
		title: "SOPHIA RAHMOUN STUDENT&nbsp;2MCT",
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
	const imageElement = document.getElementById("carouselImage");
	const titleElement = document.getElementById("carouselTitle");
	const descriptionElement = document.getElementById("carouselDescription");

	imageElement.src = images[currentIndex].src;
	imageElement.setAttribute("data-index", currentIndex); // Set data-index
	titleElement.innerHTML = images[currentIndex].title; // Use innerHTML for <br> support
	descriptionElement.innerHTML = images[currentIndex].description; // Use innerHTML for <br> support
}

//menu red hover section
// Function to handle active link highlighting
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// Get the current page URL
	const currentPage = window.location.pathname.split("/").pop(); // Get the last part of the URL (e.g., 'index.html')

	// Select all navigation links
	const navLinks = document.querySelectorAll(".nav-link");

	// Loop through the links and add the 'active' class to the link that matches the current page
	navLinks.forEach((link) => {
		// Ensure we compare only the filename part
		const linkPage = link.getAttribute("href").split("/").pop();

		if (linkPage === currentPage) {
			link.classList.add("active");
		}
	});
});
