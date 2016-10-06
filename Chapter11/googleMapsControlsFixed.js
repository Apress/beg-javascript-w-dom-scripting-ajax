function addMap() {
  if (GBrowserIsCompatible()) {
    var mapcontainer = document.getElementById('map');
    var map = new GMap2(mapcontainer);
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    var point = new GLatLng(51.5623,-0.0934);
    map.setCenter(point, 13);
    var overview=document.getElementById('map_overview');
    mapcontainer.style.position='relative';
    overview.style.position='absolute';
    mapcontainer.appendChild(overview);
  }
}
window.onload=addMap;
window.onunload=GUnload;
