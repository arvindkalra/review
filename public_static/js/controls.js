document.addEventListener('DOMContentLoaded', function () {

    let marker_arr = window.App.markerArr;
    let curr_idx = 0;

    let $next = document.getElementById('next');
    let $previous = document.getElementById('previous');

    $next.addEventListener('click', function () {
        curr_idx = (curr_idx + 1) % marker_arr.length;

        let $info = document.getElementById('info');
        $info.innerHTML = marker_arr[curr_idx].name;

        window.App.map.panTo({
            lat: marker_arr[curr_idx].lat,
            lng: marker_arr[curr_idx].lng
        });
    });

    $previous.addEventListener('click', function () {
        curr_idx--;
        if(curr_idx < 0){
            curr_idx += marker_arr.length;
        }
        let $info = document.getElementById('info');
        $info.innerHTML = marker_arr[curr_idx].name;

        window.App.map.panTo({
            lat: marker_arr[curr_idx].lat,
            lng: marker_arr[curr_idx].lng
        });
    });

});