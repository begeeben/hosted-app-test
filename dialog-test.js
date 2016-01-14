var alertButton = document.getElementById('alert-button');
var confirmButton = document.getElementById('confirm-button');
var promptButton = document.getElementById('prompt-button');

alertButton.addEventListener('click', e => {
  window.alert('window.alert');
});

confirmButton.addEventListener('click', e => {
  if (window.confirm('window.confirm')) {
    window.alert('window.confirm true');
  } else {
    window.alert('window.confirm false');
  }
});

promptButton.addEventListener('click', e => {
  var result = window.prompt('window.prompt');
  window.alert(result);
});
