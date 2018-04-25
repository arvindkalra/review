window.App = {
    openModal : function (target) {
        // Get the target from the "data-target" attribute
        // let target = $requestBtn.dataset.target;
        let $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $target.classList.toggle('is-active');

        let $close = document.getElementsByClassName("close");

        for(let i = 0; i < $close.length; i++){
            $close[i].addEventListener('click', function () {
                $target.classList.remove('is-active');
            })
        }
    }
};