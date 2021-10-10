let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

//adding marker onlocation and hello world text
var marker = new google.maps.Marker({
  position:{lat:-34.397,lng:150.644}, map:map,
  label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Hello,World' }
});


  google.maps.event.addListener(map,"bounds_changed", function(){
    boundsCheck()
    
  });

  // checking if the focused location is in inbounds
  function boundsCheck() {
    console.log('function boundsCheck()!');
    var zoomLevel = map.getZoom()
    var inBounds = false;
  
    if (map.getBounds().contains({lat:-34.397,lng:150.644})) {
        inBounds = true;
    }
  
    // display inbounds and zoom level on console
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
  }
  }
