let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function swapVideos() {
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');

    if (video1.style.display === 'none') {
        video1.style.display = 'block';
        video2.style.display = 'none';
    } else {
        video1.style.display = 'none';
        video2.style.display = 'block';
    }
}