/**
 * Carga el google map y lo centraliza en europa.
 * @return {Object}
 */
function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(48.341646,7.250977),
      zoom:4,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

/**
 * Carga la posicion en el google map, segun la latitud y longitud.
 * @param  {double} latitud
 * @param  {double} longitud
 * @return {Object}
 */
function changeMapByPosition(latitud, longitud) {
  var mapCanvas = document.getElementById("googleMap");
  var myCenter = new google.maps.LatLng(latitud,longitud);
  var mapOptions = {center: myCenter, zoom: 4};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

/**
 * Carga la posicion en el google map, segun la movilidad elegida.
 * @param  {Movilidad} movilidad
 * @return {Object}
 */
function changeMap(movilidad) {
  var myCenter = new google.maps.LatLng(movilidad.latitud,movilidad.longitud);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 4};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:mostrarCiclos()
    });
  infowindow.open(map,marker);
  });
}
