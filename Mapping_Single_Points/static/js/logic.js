// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
 }).addTo(map);

// We create the tile layer that will be the background of our map. (Use L.tileLayer() method to create a tile layer)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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