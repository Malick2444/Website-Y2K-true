// Initialize the map
const map = L.map("map").setView([37.7749, -122.4194], 13); // Example: San Francisco

// Add the OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker to the map
L.marker([37.7749, -122.4194])
	.addTo(map)
	.bindPopup("San Francisco")
	.openPopup();
