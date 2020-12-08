function initMap() {
    var lat;
    var lng;
    lat = 41.1476136;
    lng = 1.1057126;
    if (!localStorage.getItem('zona')) {
        lat = 41.1476136;
        lng = 1.1057126;
    } else {
        switch (localStorage.getItem('zona')) {
            case "1":
                lat = 41.199092;
                lng = 1.1318003;
                break;
            case "2":
                lat = 41.26141;
                lng = 1.1613327;
                break;
        }
    }
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 15,
    });

    //var infoWindow = new google.maps.InfoWindow;

    var marker = new google.maps.Marker({
        map: map,
        position: { lat: lat, lng: lng }
    });
}