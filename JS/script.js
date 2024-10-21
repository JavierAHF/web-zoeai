document.querySelector('a[href="#Inicio"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#Inicio').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#Guia"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#Guia').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#Sobre-Nosotros"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#Sobre-Nosotros').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#Contacto"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#Contacto').scrollIntoView({
        behavior: 'smooth'
    });
});