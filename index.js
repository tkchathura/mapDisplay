function initMap() {
  const styledMapType = new google.maps.StyledMapType(
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


    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -37.802135, lng: 144.961877},
      zoom: 15,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map']
      }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');


    //    google.maps.event.addListener(map, 'click', function(event){
    //      // Add marker
    //      addMarker({coords:event.latLng});
    //    });
    //
    //    var markers = [
    //      {
    //        coords:{lat: -37.807463, lng: 144.963154},
    //        iconImage:'MetroTunnel.png',
    //        content:'<h4>New State Library Station</h4>'
    //      },
    //      {
    //        coords:{lat: -37.799656, lng: 144.957940},
    //        iconImage:'MetroTunnel.png',
    //        content:'<h4>New Parkville Station</h4>'
    //      },
    //      {
    //        coords:{lat: -37.801004, lng: 144.940624},
    //        iconImage:'MetroTunnel.png',
    //        content:'<h4>New North Melbourne</h4>'
    //      },
    //      {
    //        coords:{lat: -37.815725, lng: 144.966912},
    //        iconImage:'MetroTunnel.png',
    //        content:'<h4>New Town Hall Station</h4>'
    //      }
    //    ];
    //
    //
    //    for(var i = 0;i < markers.length;i++){
    //      // Add marker
    //      addMarker(markers[i]);
    //    }
    //
    //    function addMarker(props){
    //      var marker = new google.maps.Marker({
    //        position:props.coords,
    //        map:map,
    //        //icon:props.iconImage
    //      });
    //
    //      // Check for customicon
    //      if(props.iconImage){
    //        // Set icon image
    //        marker.setIcon(props.iconImage);
    //      }
    //
    //      // Check content
    //      if(props.content){
    //        var infoWindow = new google.maps.InfoWindow({
    //          content:props.content
    //        });
    //
    //        marker.addListener('click', function(){
    //          infoWindow.open(map, marker);
    //        });
    //      }
    //    }

    // var markerLatLng = new google.maps.LatLng(-37.807463, 144.963154);
  
  
    let markerLabelOne=0;
    const metroTunnelLocations=[
      {lat: -37.807463, lng: 144.963154},
      {lat: -37.799656, lng: 144.957940},
      {lat: -37.801004, lng: 144.940624},
      {lat: -37.815725, lng: 144.966912}
    ];

    metroTunnelLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'MetroTunnel.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(-5,5),
    };

    markerLabelOne = index+1;
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelOne.toString(),
        color: "#eb3a44",
        fontSize: "16px",
        fontWeight: "bold"
      }
    });

  });
  
  //Major Educational+Research Universities and Institutes
    const universityLocations=[
      {lat: -37.808457, lng: 144.964004},
      {lat: -37.796373, lng: 144.961531},
      {lat: -37.783783, lng: 144.958383},
      {lat: -37.807932, lng: 144.977607},
      {lat: -37.799608, lng: 144.9591}
      //{lat: -37.785692, lng: 144.958763}
    ];

    universityLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'university.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelTwo = markerLabelOne+index;
  //  console.log(markerLabelTwo);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelTwo.toString(),
        color: "#37474F",
        fontSize: "16px",
        fontWeight: "bold"
      }
    });
     markerLabelTwo=0;
  });
  
  
  
  //Other Educational and Training Facilities Institutes
  const trainingLocations=[
      {lat: -37.810819, lng: 144.958971},
      {lat: -37.811654, lng: 144.95944},
      {lat: -37.813353, lng: 144.95959},
      {lat: -37.812963, lng: 144.960783},
      {lat: -37.810171, lng: 144.968965}
     ];

    trainingLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'university.png',
      scaledSize: new google.maps.Size(15, 15),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(20,0),
    };

    let markerLabelThree = markerLabelOne+universityLocations.length+index;
 //   console.log(markerLabelThree);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelThree.toString(),
        color: "#37474F",
        fontSize: "14px",
        //fontWeight: "bold"
      }
    });
     markerLabelThree=0;
  });
  
  
  
    //Innovation Centres
  const innovationLocations=[
      {lat: -37.785674, lng: 144.958951},
      {lat: -37.800066, lng: 144.964752}
     ];

    innovationLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'innovation.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,15),
    };

    let markerLabelFour = markerLabelOne+universityLocations.length+trainingLocations.length+index;
  //  console.log(markerLabelFour);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelFour.toString(),
        color: "#37474F",
        fontSize: "16px",
        fontWeight: "bold"
      }
    });
     markerLabelFour=0;
  });
  
  
     //Hospital Facilities
    const hospitalLocations=[
      {lat: -37.807424, lng: 144.974667},       // St. Vincent
      {lat: -37.80904, lng: 144.976213},        // Royal Victorian Eye and Ear 
      {lat: -37.799647, lng: 144.964521},       //Royal Dental
      {lat: -37.79937, lng: 144.956542},        //Royal MElbourne
      {lat: -37.798738, lng: 144.954868},       //Royal Women's
      {lat: -37.795028, lng: 144.949945}        //Royal Children's
     ];

    hospitalLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'hospital.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelFive = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+index;
    //console.log(markerLabelFive);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelFive.toString(),
        color: "#37474F",
        fontSize: "16px",
        fontWeight: "bold"
      }
    });
     markerLabelFive=0;
  });
  
  //Biomedical Research Facilities
    const biomedicalLocations=[
      {lat: -37.779327, lng: 144.945357},       // CSL Corporate
      {lat: -37.80262, lng: 144.957322},        // CSL Headquarters
      {lat: -37.793616, lng: 144.949123},       //Murdoch Children's
      {lat: -37.79832, lng: 144.95845},        //The Florey
      {lat: -37.797529, lng: 144.953968},       //Bio21
      {lat: -37.800047, lng: 144.957931},       //Peter Dohetry
      {lat: -37.798093, lng: 144.956063},        //Walter and Eliza
      {lat: -37.800101, lng: 144.956538}         //Peter Mac
     ];

    biomedicalLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'biomedical.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelSix = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+hospitalLocations.length+index;
    console.log(markerLabelSix);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelSix.toString(),
        color: "#37474F",
        fontSize: "16px",
        fontWeight: "bold"
      }
    });
     markerLabelSix=0;
  });
  
  
  
  
  
}
