document.getElementById("catalogo").addEventListener("click", function() {
    var container = document.getElementById("catalogo-container");
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
});
x
let index = 0;

function showImages() {
    const images = document.querySelectorAll('.carrete img');
    const nextIndex = (index + 1) % images.length;
    
    // Añadir clase de animación a la imagen actual
    images[index].classList.add('animate');
    
    // Esperar 1 segundo para cambiar la imagen
    setTimeout(() => {
        images.forEach((img, i) => {
            if (i === nextIndex) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
        
        // Remover clase de animación después de la transición
        images[index].classList.remove('animate');
        
        index = nextIndex;
    }, 1000); // 1 segundo antes de cambiar la imagen
}

showImages();
setInterval(showImages, 6000); // Cambia las imágenes cada 6 segundos
