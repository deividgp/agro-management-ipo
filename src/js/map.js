function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.1476136, lng: 1.1057126 },
        zoom: 15,
    });

    var infoWindow = new google.maps.InfoWindow;

    var marker = new google.maps.Marker({
        map: map,
        position: { lat: 41.1476136, lng: 1.1057126 }
    });
}