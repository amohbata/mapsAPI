// $(function(){
//   $("#address").keyup(function(event){
//       if(event.keyCode == 13){
//           $("#address").click();
//       }
//   });
// });


var geocoder;
var map;


function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(49.2818872,-123.1081877);
  var mapOptions = {
    zoom: 13,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
	position: latlng,
	map: map,
  draggable: true,
  animation: google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}



function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  }else{
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function getUserInput() {
  var userinput = document.getElementById('address').value;
  alert(userinput);
}



google.maps.event.addDomListener(window, 'load', initialize);