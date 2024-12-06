import { numPelotas, pelotas, maxWidth, maxHeight } from './char.js';
import { mario, yoshi, wario, luigi } from './char.js';




// Función para mover las pelotas
function movePelotas() {
  for (var i = 0; i < pelotas.length; i++) {
    var pelota = pelotas[i];
    var currentLeft = parseFloat(pelota.style.left) || (maxWidth / 2);
    var currentTop = parseFloat(pelota.style.top) || (maxHeight / 2);

    // Verificar colisiones con los bordes horizontales
    if (currentLeft + pelota.dx >= maxWidth || currentLeft + pelota.dx <= 0) {
      pelota.dx *= -1; // Invertir dirección horizontalmente
    }

    // Verificar colisiones con los bordes verticales
    if (currentTop + pelota.dy >= maxHeight || currentTop + pelota.dy <= 0) {
      pelota.dy *= -1; // Invertir dirección verticalmente
    }

    // Actualizar la posición de la pelota
    pelota.style.left = currentLeft + pelota.dx + 'px';
    pelota.style.top = currentTop + pelota.dy + 'px';
  }

  // Repetir el movimiento a una tasa de actualización de 60fps
  requestAnimationFrame(movePelotas);
}

// Crear múltiples pelotas
for (var i = 0; i < numPelotas; i++) {
  mario();
  yoshi();
  wario();
}
luigi();

// Iniciar el movimiento de las pelotas
movePelotas();


//detecta el click a luigi
document.querySelector('.luigi').addEventListener('click', function() {
    alert("Luigi has been found!");
    location.reload()
    
});


window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.1;
    audio.loop = true;
    audio.play();
  });