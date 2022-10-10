const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.burger-icon');
const hidden = document.querySelector('.hidden');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const sliderList = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');

const testimContainer = document.querySelector('.testimonials-items');
const testim = document.querySelectorAll('.test-item');
const testIcon = document.querySelector('.test-icon');
const testPop = document.querySelector('.test-pop');

const body = document.body;

const textTest = document.querySelectorAll(".test-item");
const containerTest = document.querySelector(".testimonials-items");
const scroll = document.querySelector(".scroll-box");

if (getComputedStyle(menuBtn).display === 'block') {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
        hidden.classList.toggle('display-none');
    });

    hidden.addEventListener('click', e => {
        if (e.target.classList.contains('hidden')) {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            body.classList.toggle('lock');
            hidden.classList.toggle('display-none');
            testim.forEach(link => link.classList.remove('test-mobil-pop'));
            testim.forEach(link => link.classList.add('test-item'));
            testimContainer.classList.remove('test-mobil-container');
            testPop.classList.toggle('display-none');
        };
    });

    testIcon.addEventListener('click', () => {
        testPop.classList.toggle('display-none');
        body.classList.toggle('lock');
        testim.forEach(link => link.classList.remove('test-mobil-pop'));
        testim.forEach(link => link.classList.add('test-item'));
        testimContainer.classList.remove('test-mobil-container');
        hidden.classList.toggle('display-none');
    });

    testim.forEach(link => {
        link.addEventListener('click', function () {
            testim.forEach(link => link.classList.remove('test-mobil-pop'));
            testimContainer.classList.add('test-mobil-container');
            this.classList.toggle('test-item');
            this.classList.toggle('test-mobil-pop');
            testPop.classList.toggle('display-none');
            hidden.classList.toggle('display-none');
            body.classList.toggle('lock');
        });
    });
} else {
    for(let i = 0, j = 0; i<7; i++, j++) {
        if (j === 4) {
            j=0;
        }
        let a = textTest[j].cloneNode(true);
        textTest[3].after(a);
    }
    
    scroll.addEventListener("input", function() {
        containerTest.style.marginLeft = `${parseInt(scroll.value * -(parseInt((getComputedStyle(document.querySelector(".test-item")).marginLeft).match(/\d+/)) + parseInt((getComputedStyle(document.querySelector(".test-item")).marginRight).match(/\d+/)) + parseInt(Math.ceil((getComputedStyle(document.querySelector(".test-item")).width).match(/[0-9/.]+/)))))}px`;
    })
}

right.addEventListener('click', () => {
    sliderList.innerHTML = '';
    let sliderShuffleItems = shufl(Array.from(sliderItems));
    for (let i = 0; i < sliderShuffleItems.length; i++) {
        sliderList.append(sliderShuffleItems[i]);
    }
});


left.addEventListener('click', () => {
    sliderList.innerHTML = '';
    let sliderShuffleItems = shufl(Array.from(sliderItems));
    for (let i = 0; i < sliderShuffleItems.length; i++) {
        sliderList.append(sliderShuffleItems[i]);
    }
});

function shufl(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let s = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[s]] = [arr[s], arr[i]];
    }
    return arr;
};