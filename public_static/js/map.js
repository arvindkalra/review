let map;

let marker_arr = [
    {
        "name" : "1st Day of 3rd Semester",
        "lat" : 28.728670,
        "lng" : 77.082549,
        "img" : "pics/0.jpg"
    },
    {
        "name" : "Pacific Mall, Subhash Nagar",
        "lat" : 28.642031,
        "lng" : 77.106531,
        "img" : "pics/1.jpg"
    },
    {
        "name" : "Shadipur Metro Station",
        "lat" : 28.651506,
        "lng" : 77.158451,
        "img" : "pics/2.jpg"
    },
    {
        "name" : "Domino's, Karol Bagh",
        "lat" : 28.642810,
        "lng" : 77.186350,
        "img" : "pics/3.jpg"
    },
    {
        "name" : "Domino's Near Murthal",
        "lat" : 28.888647,
        "lng" : 77.117057,
        "img" : "pics/4.jpg"
    },
    {
        "name" : "HMR College",
        "lat" : 28.823846,
        "lng" : 77.152519,
        "img" : "pics/5.jpg"
    },
    {
        "name" : "World Food India Hackathon",
        "lat" : 28.589878,
        "lng" : 77.225005,
        "img" : "pics/6.jpg"
    },
    {
        "name" : "DDA Market (Sachdeva Market)",
        "lat" : 28.723610,
        "lng" : 77.127755,
        "img" : "pics/7.jpg"
    },
    {
        "name" : "Pizza Hut, Metro Walk",
        "lat" : 28.724041,
        "lng" : 77.113369,
        "img" : "pics/8.jpg"
    },
    {
        "name" : "Unity One, Rohini West",
        "lat" : 28.714798,
        "lng" : 77.116402,
        "img" : "pics/9.jpg"
    },
    {
        "name" : "Hack DTU",
        "lat" : 28.749991,
        "lng" : 77.117428,
        "img" : "pics/10.jpg"
    },
    {
        "name" : "Hansvihar Society",
        "lat" : 28.724847,
        "lng" : 77.128500,
        "img" : "pics/11.jpg"
    },
    {
        "name" : "MAIT, Rohini",
        "lat" : 28.71932194,
        "lng" : 77.06560965,
        "img" : "pics/12.jpg"
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
            window.App.openModal('markerModal', i);
        })
    }
}