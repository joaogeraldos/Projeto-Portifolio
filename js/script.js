const botao = document.querySelector('#checkbox-menu');

function toggleMenu(e){
    if (e.type === 'touchstart') {
        e.preventDefault();
    }
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

botao.addEventListener('click', toggleMenu);
botao.addEventListener('touchstart', toggleMenu);