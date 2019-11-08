function initMap() {
var styledMapType = new google.maps.StyledMapType(
        [
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.medical",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.school",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ],
{name: 'Styled Map'});
  
  
          var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -37.802135, lng: 144.961877},
          zoom: 16,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
        
        
          var labels = '1234';
        
          var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: locationTrans,
            label: labels[i % labels.length]
          });
        });
        
        var locationsTrans=[
               {lat: -37.807463, lng: 144.963154},
               {lat: -37.799656, lng: 144.957940},
               {lat: -37.801004, lng: 144.940624},
               {lat: -37.815725, lng: 144.966912}
         ];

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     label:'1',
//     title: 'Hello World!'
//   });
}
