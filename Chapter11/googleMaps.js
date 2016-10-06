function addMap() {
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map"));
		var point = new GLatLng(51.5623,-0.0934);
		map.setCenter(point, 13);
	}
}
window.onload=addMap;
window.onunload=GUnload;
