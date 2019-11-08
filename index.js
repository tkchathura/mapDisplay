function initMap() {
  var myLatLng = {lat: -37.797787, lng:  144.964162};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng
  });
  
  {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label:'1',
    title: 'Hello World!'
  });
}
