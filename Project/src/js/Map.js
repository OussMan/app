function closeMap(){
	 window.location.href = "./app.html";
}

gm.info.watchPosition(processPosition, true)
gm.info.getCurrentPosition(processPosition, true)

function processPosition(position){
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  console.log(lat+'qqqqqqqqqqqqqq '+lng);


   initAutocomplete(lat , lng);
}




 function initAutocomplete(lat , lng) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: lng},
          zoom: 13,
          mapTypeId: 'roadmap'
        });
        var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: map
        });
      		
      	////////////////// position actuele
      		var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
              };

          function success(pos) {
                var crd = pos.coords;

                console.log('Votre position actuelle est :');
                current_position_lat=crd.latitude;
                current_position_long=crd.longitude;
                console.log(`Latitude : ${current_position_lat}`);
                console.log(`Longitude: ${current_position_long}`);
                console.log(`Plus ou moins ${crd.accuracy} mètres.`);
              	return false;
              };

              function error(err) {
                //console.warn(`ERROR(${err.code}): ${err.message}`);
                return false;
              };

              navigator.geolocation.getCurrentPosition(success, error, options);
      






        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();
           ///console.log("place"+places)
          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry"+place);
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            var pos = place.geometry.location
            document.getElementById('pac-inpu').value=pos
            var coor = document.getElementById('pac-inpu').value
            var coord = coor.split(",")
            console.log(coord)

            
            
            current_position_lat = lat;
            current_position_long =lng;
            position_lat=coord[0].replace("(","");
            position_long=coord[1].replace(")","");

            console.log(position_lat+'  ffffff '+position_long)
            if(position_lat!=0 && position_long!=0 && current_position_lat!=0 && current_position_long!=0 ){
            	window.location.href='./Derection.html?position_lat='+position_lat+'&position_long='+position_long+'&current_position_lat='+current_position_lat+'&current_position_long='+current_position_long;
            }

            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location

            }));

            

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

