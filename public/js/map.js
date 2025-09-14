var lat = 23.26;
var lng = 77.41;
var map = L.map('map').setView([lat, lng], 5);
// var map = L.map('map').setView([listingData.lat, listingData.lng], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

L.marker([lat, lng]).addTo(map)
  // L.marker([listingData.lat, listingData.lng]).addTo(map)
  .bindPopup("<b>" + listingData.title + "</b><br>" + listingData.location)
  .openPopup();


