let portfolioImages = [
    'mussel_rock_para.jpg',
    'cows_chimney.jpg',
    'devils_slide.jpg',
    'seal_pile.jpg',
    'rocks.jpg',
    'elephant_seals_chimney.jpg',
    'dead_trees.jpg',
    'inn.jpg',
    'la_jolla_seagull.jpg',
    'soaring_seagull.jpg',
    'charlie_car.jpg',
    'charlie_millie.jpg',
    'vernal_rainbow.jpg',
    'yosemite_redwoods.jpg',
    'yosemite_valley.jpg',
]

let path = 'assets/';

document.addEventListener('DOMContentLoaded', () => portfolioBuilder());

function portfolioBuilder() {
    const portfolioBody = document.createElement('main');

    portfolioImages.forEach(image => {
        portfolioBody.appendChild(imageBuilder(image));
    });

    document.getElementById('portfolio-body').appendChild(portfolioBody);
}

function imageBuilder(image) {
    const img = document.createElement('img');
    img.setAttribute('src', `${path}${image}`);
    const id = image.replace(/-/g, "_").replace(/\..+$/, "");
    const imageBox = document.createElement('div');
    imageBox.setAttribute('id', id);
    imageBox.appendChild(img);
    return imageBox;
}
