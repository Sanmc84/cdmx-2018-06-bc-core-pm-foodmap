console.log('inicio');

// Carga los datos de los marcadores
let locations = [
    ['Tacos Manolo', 19.390946, -99.157075, 19], //se introducen latitudes del lugar
    ['Tacos don Guero', 19.428039, -99.171245, 18],
    ['Tacos elborrego viudo', 19.399562, -99.185204, 17],
    ['Tacos Beto los de cochinada', 19.383974, -99.152199, 16],
    ['El Faraon', 19.419089, -99.167464, 15],
    ['El huequito de Gante', 19.433858, -99.139568, 14],
    ['El Tizoncito', 19.432990, -99.161996, 13],
    ['Tortas y tacos elpaisa', 19.401298, -99.131527, 12],
    ['Salon Corona', 19.426254, -99.163139, 11],
    ['Taqueria Tlaquepaque', 19.429581, -99.141640, 10],
    ['Loscompadres Arabes', 19.538339, -99.226930, 9],
    ['Super tacos Chupacabras', 19.358646, -99.169665, 8],
    ['El Vilsito', 19.389396, -99.152706, 7],
    ['Los Parados', 19.382088, -99.157299, 6],
    ['El Chaparrito', 19.401811, -99.201952, 5],
    ['Taqueria orinoco', 19.417698, -99.164894, 4],
    ['El Califa', 19.426045, -99.169454, 3],
    ['La Unica', 19.538820, -99.192237, 2],
    ['El Parrillero', 19.539779, -99.193250, 1]
];

let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(19.422451, -99.140059), // latitud del lugar de inicio (CDMX)
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
});

let infowindow = new google.maps.InfoWindow();

let marker, i;
// va recorriendo latitud por latirud de los lugares declarados en la variable locations
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}