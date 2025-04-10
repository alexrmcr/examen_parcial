// main.js

// Espera a que el DOM esté cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Inicializa el carrusel manualmente si fuera necesario
    const myCarousel = document.querySelector('#carouselExample');

    if (myCarousel) {
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000, // tiempo entre slides (en milisegundos)
            ride: 'carousel', // puede ser 'carousel' o falso
            pause: 'hover', // pausa el carrusel cuando pasas el mouse
            wrap: true // vuelve al primer slide al llegar al último
        });
    }

    console.log('JS cargado correctamente 🚀');
});