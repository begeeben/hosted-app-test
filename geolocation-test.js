var installButton = document.getElementById('install-button');
if (navigator.Apps) {
  installButton.removeAttribute('disable');
  installButton.addEventListener('click', function () {
    navigator.Apps.install();
  });
}

var p = document.getElementById('geolocation-status');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    p.textContent = 'Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude;
  });
} else {
  p.textContent = 'Geolocation API unavailable';
}
