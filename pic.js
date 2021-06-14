var box = document.querySelector(".container");

box.addEventListener('click', function(event) {

    var currentPic = event.target.closest('img');
    var bigPicture = document.querySelector('.photo')

    if (!currentPic) {
        return;
    }

    bigPicture.children[0].src = currentPic.src;
    var previosPicture = document.querySelector('.active-image');
    previosPicture.classList.remove('active-image');

    if (currentPic.tagName === 'IMG') {
        currentPic.classList.add('active-image')
    }

})