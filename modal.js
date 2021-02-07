function createOverlay(button, wrapper, close) {
    'use strict';

    let buttonOvr = document.querySelector(button),
        overlay = document.querySelector(wrapper),
        closeOvr = overlay.querySelector(close);

    console.log(buttonOvr);

    buttonOvr.addEventListener('click', function() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeOvr.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
}   