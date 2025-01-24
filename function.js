document.addEventListener("DOMContentLoaded", () => {
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

	let currentIndex = 0;

	// Preload all images
	images.forEach((imageData) => {
		const img = new Image();
		img.src = imageData.src;
	});

	// DOM Elements
	const imageElement = document.getElementById("carouselImage");
	const titleElement = document.getElementById("carouselTitle");
	const descriptionElement = document.getElementById("carouselDescription");

	// Function to update carousel
	function updateCarousel(index) {
		const currentImage = images[index];
		imageElement.src = currentImage.src;
		imageElement.setAttribute("data-index", index); // Update data-index
		titleElement.innerHTML = currentImage.title; // Use innerHTML for <br> support
		descriptionElement.innerHTML = currentImage.description;
	}

	// Initialize the carousel with the first image
	updateCarousel(currentIndex);

	// Function to handle image changes
	window.changeImage = (direction) => {
		currentIndex = (currentIndex + direction + images.length) % images.length; // Wrap around
		updateCarousel(currentIndex);
	};

	// Highlight active link in the navbar
	const currentPage = window.location.pathname.split("/").pop();
	const navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach((link) => {
		const linkPage = link.getAttribute("href").split("/").pop();
		if (linkPage === currentPage) {
			link.classList.add("active");
		}
	});
});
