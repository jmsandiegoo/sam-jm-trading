// Btn Functionality

function scrollToSpecificElem(position) {
    $("html, body").animate({
        scrollTop: position
    }, 900);
}

function getTopPosition(elem) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    return elem.getBoundingClientRect().top + scrollTop;
}

var contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click', function () {
    var contactSection = document.querySelector(".business-info-section")
    scrollToSpecificElem(getTopPosition(contactSection));
});

var locateBtn = document.querySelector("#locate-btn");

locateBtn.addEventListener('click', function () {
    console.log('clicked');
    var locateSection = document.querySelector(".business-info-section .locate")
    scrollToSpecificElem(getTopPosition(locateSection) - 20);
})


/* Commented for future references when google map api is going to be used
// Initialize and add the google map
function initMap() {
    // The location of Sam & Jm Trading
    var hardware = {lat: 14.735237, lng: 121.154271}; 
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17.5, center: hardware});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: hardware, 
        map: map, 
        title: "Sam & Jm Trading", 
        icon: {
            url: "img/marker.svg",
            scaledSize: new google.maps.Size(60,60),
            origin: new google.maps.Point(0,0)
        }});
}

// Append the external Google Map JS into DOM

var googleMapScript = document.createElement('script');
googleMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCc3wcurQUPA7ydoYcPu2CbTmCVi63EWbU&callback=initMap"
googleMapScript.defer = true;
var firstScriptTag = document.body.appendChild(googleMapScript);
*/

// Initialize Open Street Map used instead since it is open source

// Map Settings
var mapOptions = {
    center: [14.735237, 121.154271],
    zoom: 18
}

// Creating Map Object
var map = new L.map('map', mapOptions);

// Creating a Layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    subdomains: ['a', 'b', 'c'],
    detectRetina: true,
    maxZoom: 19
}).addTo(map);

// Adding Marker

var customMarker = L.icon({
    iconUrl: 'img/map-marker.svg',
    iconSize: [55,55],
    iconAnchor: [25,50],
    popupAnchor: [0, -45]
})

var marker = L.marker([14.735237, 121.154271], {icon: customMarker}).addTo(map);

marker.bindPopup("<b>Location</b><br/>Sam & Jm Trading Hardware Location");