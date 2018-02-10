function closeDerection(){
   window.location.href = "./MapPosition.html";
}

      var current_position_lat=0;
      var current_position_long=0;
      var position_lat=0;
      var position_long=0;
      var directionsDisplay;
      var directionsService = new google.maps.DirectionsService();
      var map;

	var url_string = window.location.href; //window.location.href
	var url = new URL(url_string);
	var position_lat = url.searchParams.get("position_lat");
	var current_position_lat = url.searchParams.get("current_position_lat");
	var position_long = url.searchParams.get("position_long");
	var current_position_long = url.searchParams.get("current_position_long");
    var pickuppoint_latitude = current_position_lat;
    var pickuppoint_longitude = current_position_long;
    var deliveryPoint_latitude = position_lat;
    var deliveryPoint_longitude = position_long;

   console.log(`Latitude : `+position_lat);
   console.log(`Longitude: `+position_long);

    var pickup = new google.maps.LatLng(parseFloat(pickuppoint_latitude), parseFloat(pickuppoint_longitude));
    var delivery = new google.maps.LatLng(parseFloat(deliveryPoint_latitude), parseFloat(deliveryPoint_longitude));
function initialize () {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom:5,
    center: pickup
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
//}

//function calcRoute() {


var request = {
  origin:pickup,
  destination:delivery,
  travelMode: google.maps.TravelMode.DRIVING
};
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
//}

}

google.maps.event.addDomListener(window, 'load', initialize);