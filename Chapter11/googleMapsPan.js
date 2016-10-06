function addMap() {
  if ( GBrowserIsCompatible() ) {
    var mapContainer = document.getElementById('map');
    var map = new GMap2( mapContainer );
    var home = new GLatLng( 51.5623, -0.0934 );
    var work = new GLatLng( 51.5138, -0.1284 );
    var homeMarker = new GMarker( home );
    var workMarker = new GMarker( work );
    var homeMessage = 'This is where Chris lives';
    var workMessage = 'This is where Chris works';
    map.setCenter( home, 13 );
    map.addOverlay( homeMarker );
    map.addOverlay( workMarker );
    function addMessage() {
      map.openInfoWindowHtml( home, homeMessage, 
                             {onCloseFn:goToWork});
    }
    function goToWork() {
      map.setZoom( 12 );
      map.panTo( work )
      map.openInfoWindowHtml( work, workMessage, 
                              {onCloseFn:backToHome});
    }
    function backToHome(){
      map.panTo( home )
      map.openInfoWindowHtml( home, homeMessage, 
                              {onCloseFn:goToWork});
      map.setZoom( 13 );
    }
    GEvent.addListener( homeMarker, 'click', addMessage );
  }
}
window.onload = addMap;
window.onunload = GUnload;

