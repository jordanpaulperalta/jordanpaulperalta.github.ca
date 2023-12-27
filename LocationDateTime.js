function displayDateTime() {
    var now = new Date();
    var dateTime =
      'Today is ' +
      now.toLocaleDateString() +
      '. ' +
      'The current time on your location is ' +
      now.toLocaleTimeString();
    document.getElementById('dateTime').textContent = dateTime;
  }
  setInterval(displayDateTime, 1000);

  var map;
  var long;

  function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      var pos = { lat: latitude, lng: longitude };
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 8,
      });
      var marker = new google.maps.Marker({ position: pos, map: map });
      var zoomLevel = 8;
      var zoomInterval = setInterval(function () {
        zoomLevel++;
        map.setZoom(zoomLevel);
        if (zoomLevel >= 15) {
          clearInterval(zoomInterval);
        }
      }, 200);
    });
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }