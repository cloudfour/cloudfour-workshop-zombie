<script>
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
} else {
  onGeoError(new Error('Sorry, Geolocation not supported in this browser!'));
}

function onGeoSuccess(position) {
  var coordinates = position.coords;
  alert(coordinates.latitude + ", " + coordinates.longitude);
}
function onGeoError(error) {
  alert(error.message);
}

</script>