const toggle = document.querySelector('.js-toggle-menu');
const menu = document.querySelector(`${toggle.dataset.menu}`);
const mainNav = document.querySelector('#main-nav');

toggle.addEventListener('click', (e) => {
    menu.classList.toggle('opened');
    e.target.classList.toggle('opened');
});

mainNav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        menu.classList.remove('opened');
        toggle.classList.remove('opened');
    }
});

let splide = new Splide( '.splide', {
    pagination: false,
    type: 'fade',
    rewind: true,
	perPage: 1,
	autoHeight: 0.3,
} ).mount();

splide.on( 'moved', function(e) {
	splide.root.querySelector('.splide__list').classList.toggle('slide-action');
});


document.querySelectorAll('.form__input').forEach(item => {
    item.addEventListener('focus', () => {
        item.nextElementSibling.classList.add('active');
    });
    
    item.addEventListener('blur', () => {
        if(item.value.trim() === '') {
            item.nextElementSibling.classList.remove('active');
        }
    });
});

