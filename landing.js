const images = document.querySelector('.carousel');
const imageCollection = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const whiteColor = document.querySelector('.color-white');
const blackColor = document.querySelector('.color-black');

prevBtn.addEventListener('click', movePrev);
nextBtn.addEventListener('click', moveNext);

whiteColor.addEventListener('click', changeColorWhite);
blackColor.addEventListener('click', changeColorBlack);


let i = 0;


function movePrev() {
    i--;
    if (i < 0) {
        i = imageCollection.length - 1;
    }
    images.style.transform = `translateX(-${i * 25}%)`;

    
}

function moveNext() {
    i++;
    if (i === imageCollection.length) {
        i = 0;
    }
    images.style.transform = `translateX(-${i * 25}%)`;
}


function changeColorWhite() {
    console.log("cambia!")
    whiteColor.style.border = '5px solid teal';
    blackColor.style.border = '1px solid black';
    
}

function changeColorBlack() {
    console.log("cambia!")
    blackColor.style.border = '5px solid teal';
    whiteColor.style.border = '1px solid black';
}
