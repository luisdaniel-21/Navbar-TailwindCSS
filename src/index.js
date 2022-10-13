let button = document.querySelector('[data-mobile-menu]');
let movileMenu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {

    movileMenu.classList.toggle('hidden');
})