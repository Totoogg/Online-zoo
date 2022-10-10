const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.burger-icon');
const hidden = document.querySelector('.hidden');

const radio = document.querySelectorAll('input[name="money"]');
const spanRadio = document.querySelectorAll('.span-radio');
const inputMoney = document.querySelector('.money-input');


const body = document.body;

if (menu && menuBtn) {
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
        };
    });
}
console.log(radio);

function m(){
    for(let node of spanRadio) {
        node.classList.remove('checked-radio');
    }
    for(let node of radio) {
        if (node.checked === true) {
            node.parentNode.lastChild.classList.add('checked-radio');
        }
    }
}

m();

document.addEventListener('change', e => {
    inputMoney.value = e.target.value;
    m();
})

inputMoney.addEventListener('change', e => {
    for(let node of radio) {
        if (node.value === inputMoney.value) {
            node.checked = true;
            node.parentNode.lastChild.classList.add('checked-radio');
        } else {
            node.checked = false;
        };
    }
})