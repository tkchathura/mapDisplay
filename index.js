function initMap() {

  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ],
    {name: 'Styled Map'});
  
  
     var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -37.797787, lng: 144.964162},
          zoom: 14,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });
  
     map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label:'1',
    title: 'Hello World!'
  });
}
