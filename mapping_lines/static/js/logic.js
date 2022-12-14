// add consol.log to check to see if our code is working
console.log("working");

// create the map object with center at SFO
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// coordinates for each point to be used in the line 
let line = [
    [33.9416, -118.4085],
    [37.6213,-122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// create a ployline using the line coordinates and make the line red
L.polyline(line, {
    color: "yellow"
}).addTo(map);

// // loop through the citites array and create one marker for each city
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         fillColor: "#e68c00"
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// we create the tile layer that will be the background of our map 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// then we add our 'graymap' tile laer to the map.
streets.addTo(map);