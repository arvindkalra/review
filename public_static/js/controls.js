document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('keydown', function (ev) {
       let key = ev.keyCode;
       if(key === 39){
           doNext();
       }else if(key === 37){
           doPrev();
       }
    });

    let marker_arr = window.App.markerArr;
    let curr_idx = 0;

    let $next = document.getElementById('next');
    let $previous = document.getElementById('previous');

    function doNext(){
        curr_idx = (curr_idx + 1) % marker_arr.length;

        let $info = document.getElementById('info');
        $info.innerHTML = marker_arr[curr_idx].name;

        window.App.map.panTo({
            lat: marker_arr[curr_idx].lat,
            lng: marker_arr[curr_idx].lng
        });
    }

    function doPrev(){
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
    }

    $next.addEventListener('click', doNext);

    $previous.addEventListener('click', doPrev);

});