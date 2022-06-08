const images = document.querySelector('.carousel');
const imageCollection = document.querySelectorAll('.carousel-img');
const imageCollection1 = document.querySelectorAll('.carousel-img1');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const blackColor = document.querySelector('.color-black');
const whiteColor = document.querySelector('.color-white');
const blackCarousel = document.querySelectorAll('#black-carousel');
const whiteCarousel = document.querySelectorAll('#white-carousel');
const blackMiniature = document.querySelectorAll('#black-miniature');
const whiteMiniature = document.querySelectorAll('#white-miniature');

prevBtn.addEventListener('click', movePrev);
nextBtn.addEventListener('click', moveNext);

blackColor.addEventListener('click', changeColorBlack);
whiteColor.addEventListener('click', changeColorWhite);



let i = 0;

function movePrev() {
    i--;
    if (i < 0) {
        i = imageCollection.length - 1 ;
    }
    images.style.transform = `translateX(-${i * 100}%)`;

    
}

function moveNext() {
    i++;
    if (i === imageCollection.length || i === imageCollection1.length) {
        i = 0;
    }
    images.style.transform = `translateX(-${i * 100}%)`;
}

function changeColorBlack() {
    blackColor.style.border = '5px solid teal';
    whiteColor.style.border = '1px solid black';
    blackCarousel.forEach(function(item) {
        item.style.display = 'flex';
    });
    whiteCarousel.forEach(function(item) {
        item.style.display = 'none';
    });
    blackMiniature.forEach(function(item) {
        item.style.display = 'flex';
    });
    whiteMiniature.forEach(function(item) {
        item.style.display = 'none';
    }
    );
}

function changeColorWhite() {
    whiteColor.style.border = '5px solid teal';
    blackColor.style.border = '1px solid black';
    whiteCarousel.forEach(function(item) {
        item.style.display = 'flex';
    });
    blackCarousel.forEach(function(item) {
        item.style.display = 'none';
    });
    blackMiniature.forEach(function(item) {
        item.style.display = 'none';
    }
    );
    whiteMiniature.forEach(function(item) {
        item.style.display = 'flex';
    }
    );
    
}



