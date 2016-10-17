/**
 * @fileoverview Sample showing capturing a KML file click
 *   and displaying the contents in a side panel instead of
 *   an InfoWindow
 */

var map;
var src = 'https://sites.google.com/site/furgonana1/kml/hub3.kml';
var kmlLayer;
var latCent = 37.86184;
var lngCent = -122.31079;

/**
 * Initializes the map and calls the function that creates polylines.
 */




function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(latCent,lngCent),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });


  //take list data->convert to float->zoom in on that locations cordinates
  $('.list > li').click(function(){
  var lat = $(this).children(".latitude").text();
  console.log(lat);
  var lng = $(this).children(".longitude").text();
  console.log(lng);
  newLocation(parseFloat(lat),parseFloat(lng));
  console.log("bruh");



});
  loadKmlLayer(src, map);
}




function newLocation(newLat,newLng) {
  map.setCenter({
    lat : newLat,
    lng : newLng
  });
  map.setZoom(8);
}





/**
 * Adds a KMLLayer based on the URL passed. Clicking on a marker
 * results in the balloon content being loaded into the right-hand div.
 * @param {string} src A URL for a KML file.
 */
function loadKmlLayer(src, map) {
   kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: true,
    map: map
  });

  var infowindow = new google.maps.InfoWindow;
  google.maps.event.addListener(kmlLayer, 'click', function(kmlEvent) {
  
    showInContentWindow(kmlEvent.latLng, kmlEvent.featureData.description,kmlEvent.featureData.name);
     });

 function showInContentWindow(position, text,link) {
    var content = "<div class='infoWindow'>" + text +  "</div>" +'<iframe src="'+ link + 
    '" width="500" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' + '</iframe>';

    infowindow.setOptions({
    content: content, 
    position: position,
     });
    infowindow.open(map);
}
centerKml();

}

function centerKml(){
  var bounds = nyLayer.getDefaultViewport();
map.fitBounds(bounds);
}


 




 
//google.maps.event.addDomListener(window, 'load', initialize);
