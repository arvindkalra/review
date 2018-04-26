document.addEventListener('DOMContentLoaded', function () {

    let marker_arr = window.App.markerArr;
    let curr_idx = 0;

    let $next = document.getElementById('next');
    let $previous = document.getElementById('previous');

    $next.addEventListener('click', function () {
        window.App.map.panTo({
           lat: marker_arr[(curr_idx + 1) % marker_arr.length].lat,
           lng: marker_arr[(curr_idx + 1) % marker_arr.length].lng
        });
        curr_idx++;
    });

    $previous.addEventListener('click', function () {
        window.App.map.panTo({
            lat: marker_arr[(curr_idx - 1) % marker_arr.length].lat,
            lng: marker_arr[(curr_idx - 1) % marker_arr.length].lng
        });
        curr_idx--;
    });

});