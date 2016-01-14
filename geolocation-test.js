var installButton = document.getElementById('install-button');
var mozAppsStatus = document.getElementById('mozapp-status');

if (navigator.mozApps) {
  console.log('mozApps available');
  mozAppsStatus.textContent = 'mozApps available';
  installButton.removeAttribute('disabled');
  installButton.addEventListener('click', function () {
    navigator.mozApps.install('http://begeeben.github.io/hosted-app-test/manifest.webapp');
  });
} else {
  console.log('mozApps unavailable');
  mozAppsStatus.textContent = 'mozApps unavailable';
}

var geolocationStatus = document.getElementById('geolocation-status');

if (navigator.geolocation) {
  geolocationStatus.textContent = 'Geolocation API available, fetching position...';
  navigator.geolocation.getCurrentPosition(function(position) {
    geolocationStatus.textContent = 'Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude;
  });
} else {
  geolocationStatus.textContent = 'Geolocation API unavailable';
}
