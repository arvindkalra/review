let map;
// let marker_arr = [
//     {
//         lat: 28.6724212,
//         lng: 77.1311649
//     },
//     {
//         lat: 28.6144212,
//         lng: 77.1411649
//     },
//     {
//         lat: 28.6354212,
//         lng: 77.1241649
//     },
//     {
//         lat: 28.6524212,
//         lng: 77.1241649
//     },
//     {
//         lat: 28.6524212,
//         lng: 77.1721649
//     },
//     {
//         lat: 28.6634212,
//         lng: 77.1721649
//     },
//     {
//         lat: 28.6634212,
//         lng: 77.1611649
//     }
// ];

let marker_arr = [
    {
        "name" : "pacific",
        "lat" : 28.642031,
        "lng" : 77.106531
    },
    {
        "name" : "kundli_dominos",
        "lat" : 28.888647,
        "lng" : 77.117057
    },
    {
        "name" : "wfi",
        "lat" : 28.589878,
        "lng" : 77.225005
    },
    {
        "name" : "pizza_hut_rohini",
        "lat" : 28.724041,
        "lng" : 77.113369
    },
    {
        "name" : "unity_one",
        "lat" : 28.714798,
        "lng" : 77.116402
    },
    {
        "name" : "hack_dtu",
        "lat" : 28.749991,
        "lng" : 77.117428
    },
    {
        "name" : "hansvihar",
        "lat" : 28.724847,
        "lng" : 77.128500
    },
    {
        "name" : "dda_market",
        "lat" : 28.723610,
        "lng" : 77.127755
    },
    {
        "name" : "triply",
        "lat" : 28.728670,
        "lng" : 77.082549
    },
    {
        "name" : "shadipur",
        "lat" : 28.651506,
        "lng" : 77.158451
    },
    {
        "name" : "hmr",
        "lat" : 28.823846,
        "lng" : 77.152519
    },
    {
        "name" : "dominos_karolbagh",
        "lat" : 28.642810,
        "lng" : 77.186350
    }
];

function initMap() {

    window.App.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: marker_arr[0],
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });

    for(let i = 0; i < marker_arr.length; i++){
        marker_arr[i].marker = new google.maps.Marker({
            position: {
                lat: marker_arr[i].lat,
                lng: marker_arr[i].lng
            },
            map: window.App.map,
            scaledSize: new google.maps.Size(42, 68)
        });

        window.App.markerArr.push(marker_arr[i]);

        marker_arr[i].marker.addListener('click', function (e) {
            window.App.openModal('markerModal');
        })
    }
}