document.addEventListener('DOMContentLoaded', function() {
    var stripes = document.querySelectorAll('.stripe');
    stripes.forEach(function(stripe) {
        stripe.classList.add('loaded');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('music.mp3'); 
    var button = document.querySelector('.start-button-no-block');

    button.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            icon.src = 'img/pause.png';
        } else {
            audio.pause();
            icon.src = 'img/play.png'; 
        }
    });
});
