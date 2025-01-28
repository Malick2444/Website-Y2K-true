// Initialize the map
const map = L.map("map").setView([50.841371, 4.32539], 13); // Example: San Francisco

// Add the OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker to the map
L.marker([50.841371, 4.32539])
	.addTo(map)
	.bindPopup("Erasmushogeschool Brussel – Campus Kaai")
	.openPopup();
