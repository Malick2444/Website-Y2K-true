// JavaScript to handle carousel navigation
let currentImageIndex = 0;
const images = [
	"images/senior_1.png",
	"images/senior_2.png",
	"images/senior_3.png", // You can add more image paths here
];

function changeImage(direction) {
	currentImageIndex += direction;

	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1; // Wrap to the last image
	} else if (currentImageIndex >= images.length) {
		currentImageIndex = 0; // Wrap to the first image
	}

	document.getElementById("carouselImage").src = images[currentImageIndex];
}
