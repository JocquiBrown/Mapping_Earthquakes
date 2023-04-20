// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + ", ",  "</h2><br /><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//   }

//}).addTo(map);
var popupList = "<h2>Airport Code + feature.properties.faa</h2>"
                + "<h3>Airport Name + feature.properties.name</h3>"
L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup(popupList);
   }
}).addTo(map);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);
// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

  // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow",
//     weight: 4,
//     opacity: 0.5
//   }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
//  }).addTo(map);

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     //L.marker(city.location)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         fillColor: '#ffffa1',
//         weight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// We create the tile layer that will be the background of our map. (Use L.tileLayer() method to create a tile layer)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // OpenStreetMap URL
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // Max zoom attribute
    maxZoom: 18,
    // Contains our API Key
    accessToken: API_KEY
    // The id contains the Mapbox id for the map's style (This is the street style)
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);