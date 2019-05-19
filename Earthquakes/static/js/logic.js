// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 2
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

// Assemble API query URL
//var url = baseURL + date + complaint + limit;

// Grab the data with d3
d3.json(url, function(response) {
  //console.log (response);
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
//response.features.length
  // Loop through data
  console.log();
  for (var i = 0; response.features.length ; i++) {
    // Set the data geometry property to a variable
    var geometry = response.features[i].geometry;
    //console.log (geometry.coordinates);
    // Check for geometry property
    if (geometry) {
      var marker = L.marker([geometry.coordinates[1], geometry.coordinates[0]]).addTo(myMap);
    }
    // if (geometry) {
    //   // Add a new marker to the cluster group and bind a pop-up
    //   markers.addLayer(L.marker([geometry.coordinates[1], geometry.coordinates[0]]));
    // }
    // }
    // catch (e) {
    //   console.log("fail");
    // }
  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
