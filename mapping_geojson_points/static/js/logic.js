// add consol.log to check to see if our code is working
console.log("working");


// we create the tile layer that will be the background of our map 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// create the map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// then we add our 'graymap' tile laer to the map.
streets.addTo(map);

// accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/tsmtruong/mapping_earthquakes/mapping_geojson_points/mapping_geojson_points/majorAirports.json";

//grabbing our geoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});