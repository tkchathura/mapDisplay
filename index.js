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
        
        
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });
        
      var markers = [
        {
          coords:{lat:-37.799656,lng:144.957940},
          iconImage:'MetroTunnel.png',
          content:'<h1>Lynn MA</h1>'
        },
        {
          coords:{lat:-37.799656,lng:144.957940},
        },
        {
          coords:{lat:-37.807463,lng:144.963154}
        },
        {
          coords:{lat:-37.807463,lng:144.963154}
        }
      ];
        
        
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }
        
            function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
        
//           var labels = 'ABCD';
        
//           var markers = locations.map(function(location, i) {
//           return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//           });
//         });
        
//         var locations=[
//                {lat: -37.807463, lng: 144.963154},
//                {lat: -37.799656, lng: 144.957940},
//                {lat: -37.801004, lng: 144.940624},
//                {lat: -37.815725, lng: 144.966912}
//          ]

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     label:'1',
//     title: 'Hello World!'
//   });
}
