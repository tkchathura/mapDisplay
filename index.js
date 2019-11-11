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
  
  
    // RMIT Development Site
    var RMITco = [
          {lat: -37.806699, lng: 144.964406},
          {lat: -37.804791, lng: 144.964734},
          {lat: -37.804969, lng: 144.966075},
          {lat: -37.806838, lng: 144.965758},
	        {lat: -37.806699, lng: 144.964406}
        ];

	 
        var RMITsite = new google.maps.Polygon({
          paths: RMITco,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        RMITsite.setMap(map);
	
	
	// Boundary - City North + Parkville	
	
	var cityNorth = [
          {lat: -37.812284, lng: 144.962239},
          {lat: -37.810098, lng: 144.969642},
		{lat:  -37.808158, lng: 144.968736},
		{lat:  -37.807815, lng: 144.96992},
		{lat:  -37.807489, lng: 144.970692},
		{lat:  -37.807724, lng: 144.973219},
		{lat:  -37.801217, lng: 144.974327},
		{lat:  -37.800743, lng: 144.96994},
		{lat:  -37.792577, lng: 144.971344},
		{lat:  -37.792258, lng: 144.968402},
		{lat:  -37.792278, lng: 144.968269},
		{lat:  -37.792341, lng: 144.968172},
		{lat:  -37.792671, lng: 144.967864},
		{lat:  -37.792937, lng: 144.967486},
		{lat:  -37.793101, lng: 144.967056},
		{lat:  -37.793167, lng: 144.966662},
		{lat:  -37.793206, lng: 144.966433},
		{lat:  -37.793228, lng: 144.965896},
		{lat:  -37.793155, lng: 144.965199},
		{lat:  -37.792862, lng: 144.964326},
		{lat:  -37.792373, lng: 144.963568},
		{lat:  -37.79214, lng: 144.963025},
		{lat:   -37.791964, lng: 144.962391},
		{lat:   -37.791906, lng: 144.961999},
		{lat:   -37.79188, lng: 144.961491},
		{lat:   -37.791743, lng: 144.961095},
		{lat:   -37.791212, lng: 144.961811},
		{lat:   -37.790953, lng: 144.961955},
		{lat:   -37.790743, lng: 144.961987},
		{lat:   -37.789772, lng: 144.961958},
		{lat:   -37.789437, lng: 144.962041},
		{lat:   -37.789069, lng: 144.962207},
		{lat:   -37.788803, lng: 144.962509},
		{lat:   -37.788532, lng: 144.962729},
		{lat:   -37.785, lng: 144.96335},
		{lat:   -37.784919, lng: 144.963414},
		{lat:   -37.78494, lng: 144.963623},
		{lat:   -37.783117, lng: 144.963912},
		{lat:   -37.782438, lng: 144.964022},
		{lat:   -37.782311, lng: 144.963847},
		{lat:   -37.782011, lng: 144.963344},
		{lat:   -37.781555, lng: 144.962962},
		{lat:   -37.780983, lng: 144.96278},
		{lat:   -37.780147, lng: 144.962855},
		{lat:   -37.779701, lng: 144.96282},
		{lat:   -37.779346, lng: 144.962713},
		{lat:   -37.778993, lng: 144.962489},
		{lat:   -37.778703, lng: 144.962188},
		{lat:   -37.778226, lng: 144.961539},
		{lat:   -37.778097, lng: 144.960478},
		{lat:   -37.778016, lng: 144.959793},
		{lat:   -37.777767, lng: 144.957752},
		{lat:   -37.777227, lng: 144.953299},
		{lat:   -37.776849, lng: 144.950185},
		{lat:   -37.776683, lng: 144.94882},
		{lat:   -37.775933, lng: 144.942626},
		{lat:   -37.775766, lng: 144.941254},
		{lat:   -37.775685, lng: 144.94057},
		{lat:   -37.775515, lng: 144.939164},
		{lat:   -37.777394, lng: 144.937743},
		{lat:   -37.778424, lng: 144.938185},
		{lat:   -37.779028, lng: 144.938507},
		{lat:   -37.780152, lng: 144.939108},
		{lat:   -37.78053, lng: 144.939375},
		{lat:   -37.78155, lng: 144.939824},
		{lat:   -37.782039, lng: 144.939921},
		{lat:   -37.783734, lng: 144.940016},
		{lat:   -37.78439, lng: 144.940076},
		{lat:   -37.784907, lng: 144.940232},
		{lat:   -37.78588, lng: 144.940653},
		{lat:   -37.786292, lng: 144.940799},
		{lat:   -37.787553, lng: 144.940788},
		{lat:   -37.788417, lng: 144.940947},
		{lat:   -37.796601, lng:  144.951197},
		{lat:   -37.797038, lng:  144.950704},
		{lat:   -37.797961, lng:  144.950558},
		{lat:   -37.798224, lng: 144.950907},
		{lat:   -37.798534, lng: 144.950452},
		{lat:   -37.800277, lng: 144.950141},
		{lat:   -37.800415, lng: 144.952011},
		{lat:   -37.802226, lng: 144.954282},
		{lat:   -37.803556, lng: 144.954045},
		{lat:   -37.803712, lng: 144.955528},
		{lat:   -37.805789, lng: 144.955145},
		{lat:    -37.805871, lng: 144.95589},
		{lat:    -37.809034, lng: 144.955349},
		{lat:    -37.809182, lng: 144.956505},
		{lat:    -37.80929, lng: 144.956511},
		{lat:    -37.809387, lng: 144.957574},
		{lat:    -37.809542, lng: 144.957721},
		{lat:    -37.809587, lng: 144.958217},
		{lat:    -37.80942, lng: 144.958256},
		{lat:    -37.808868, lng: 144.958009},
		{lat:    -37.808176, lng: 144.960367},
	  {lat: -37.812284, lng: 144.962239}
        ];

	 
        var cityNorthBoundary = new google.maps.Polygon({
          paths: cityNorth,
          strokeColor: '#3F4905',
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: '#3A6FD9',
          fillOpacity: 0.05
        });
        cityNorthBoundary.setMap(map);
	
	
  
  // Metro Tunnel Locations
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
        fontSize: "10px",
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
        fontSize: "10px",
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
        fontSize: "10px",
        fontWeight: "bold"
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
      labelOrigin:  new google.maps.Point(25,10),
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
        fontSize: "10px",
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
        fontSize: "10px",
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
      anchor: new google.maps.Point(0,5),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelSix = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+hospitalLocations.length+index;
   // console.log(markerLabelSix);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelSix.toString(),
        color: "#37474F",
        fontSize: "10px",
       fontWeight: "bold"
      }
    });
     markerLabelSix=0;
  });
  
  
  //Justice Facilities
    const justiceLocations=[
      {lat: -37.777135, lng: 144.944750}         //Parkville Justice Centre
     ];

    justiceLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'justice.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,0),
      labelOrigin:  new google.maps.Point(25,20),
    };

    let markerLabelSeven = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+hospitalLocations.length+justiceLocations.length+index;
    console.log(markerLabelSeven);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelSeven.toString(),
        color: "#37474F",
        fontSize: "10px",
        fontWeight: "bold"
      }
    });
     markerLabelSeven=0;
  });
  
  
    //Open Spaces
    const openLocations=[
      {lat: -37.790904, lng: 144.953196},         //Royal Park
      {lat: -37.805494, lng: 144.970588},         //Carlton Gardens
      {lat: -37.810931, lng: 144.954829}         //Flagstaff
     ];

    openLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'open.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelEight = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+hospitalLocations.length+justiceLocations.length+justiceLocations.length+index;
    console.log(markerLabelEight);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelEight.toString(),
        color: "#37474F",
        fontSize: "10px",
       fontWeight: "bold"
      }
    });
     markerLabelEight=0;
  });
  
  
  
      //Public Locations
    const publicLocations=[
      {lat: -37.806802, lng: 144.959381},         //Queen Victoria Market
      {lat: -37.809919, lng: 144.965832},         //State Library
   //   {lat: -37.801198, lng: 144.957179},         //Heymarket
      {lat: -37.784513, lng: 144.951587},         //Zoo
   //   {lat: -37.807836, lng: 144.965319},         //Old Melbourne Goal
      {lat: -37.803313, lng: 144.971572},         //Melbourne Museum
  //    {lat: -37.807178, lng: 144.963233},         //Melbourne City Baths
      {lat: -37.804885, lng: 144.971767}         //Royal Exhibition Building
     ];

    publicLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'public.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelNine = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+hospitalLocations.length+justiceLocations.length+justiceLocations.length+openLocations.length+index;
    console.log(markerLabelNine);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelNine.toString(),
        color: "#37474F",
        fontSize: "10px",
      fontWeight: "bold"
      }
    });
     markerLabelNine=0;
  });
	

	
   //City Loop
    const cityLoopLocations=[
      {lat: -37.810367, lng: 144.962845},         //Melbourne Central
      {lat: -37.818673, lng: 144.952464},         //Southern Cross
      {lat: -37.812235, lng: 144.956092},         //Flagstaff
      {lat: -37.806801, lng: 144.942366},         //North Melbourne
      {lat: -37.781211, lng: 144.952295}         //Royal Park Station
     ];

    cityLoopLocations.forEach((value, index) => {
    const markerIcon = {
      //url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      url:'cityLoop.png',
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0,30),
      labelOrigin:  new google.maps.Point(25,0),
    };

    let markerLabelTen = markerLabelOne+universityLocations.length+trainingLocations.length+innovationLocations.length+hospitalLocations.length+justiceLocations.length+justiceLocations.length+openLocations.length+publicLocations.length+index;
    console.log(markerLabelTen);
    const marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: value,
      icon: markerIcon,
      label: {
        text: markerLabelTen.toString(),
        color: "#37474F",
        fontSize: "10px",
       fontWeight: "bold"
      }
    });
     markerLabelTen=0;
  });
  
  
  
  
  
}
