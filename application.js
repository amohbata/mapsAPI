
var vancouver = new google.maps.LatLng(49.2818872,-123.1081877);
var marker; 
var map;


function initialize() {
  var mapOptions = {
    zoom:13,
    center:vancouver
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    marker = new google.maps.Marker({
  	position:vancouver,
  	map:map,
    draggable:true,
    animation:google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  }else{
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);