
$(document).ready(function () {
    window.onclick = e => {
        const image = $(e.target);
        const tag = image.prop('nodeName');
        const imgClass = image.prop('className');
        const imgID = image.attr('id');
        if (tag == 'IMG'
            && imgClass != 'overlay'
            && imgID != 'overlay-image') {
            createImageOverlay(image.attr('src'));
            $('.overlay').fadeOut(0);
            $('.overlay').fadeIn(400);
        } else {
            $('.overlay').fadeOut(400, () => {
                $('.overlay').remove();
            });
        }
    }
});

function createImageOverlay(imgSrc) {

    const imageOverlay = document.createElement('div');
    imageOverlay.className = 'overlay';
    imageOverlay.innerHTML = /*html*/ `
        <style>
            .overlay {
                opacity: 1;
                display: grid;
                width: 100%;
                height: 100%;
                position: fixed;
                grid-template-columns: 1fr 8fr 1fr;
                grid-template-rows: auto;
                place-items: center;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.8);
                left: 0;
                top: 0;
            }
            .overlay img {
                height: auto;
                max-height: 100%;
                max-width: 100%;
                grid-column: 2 / 3;
                grid-row: 1 / 2;
            }
        </style>
    `

    const image = document.createElement('img');
    image.id = 'overlay-image'
    image.src = imgSrc;

    imageOverlay.appendChild(image);
    document.getElementsByTagName('main')[0].prepend(imageOverlay);
}