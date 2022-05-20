const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('#primary-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


const catCards = document.querySelectorAll('.cat-card');

function removeActiveCatClasses() {
    catCards.forEach((card) => {
        card.classList.remove('cat-card-active');
    })
};

catCards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveCatClasses();
        card.classList.add('cat-card-active');
    });
});




const searchInput = document.querySelector('input[type="search"]');

let i = 0;
let welcome = 'Welcome';
let speed = 300;

function typeWriter() {

    if (i < welcome.length) {
        searchInput.value = welcome.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
