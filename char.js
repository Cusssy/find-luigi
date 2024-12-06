export var pelotas = [];
export var maxWidth = window.innerWidth - 100;
export var maxHeight = window.innerHeight - 100;
export var numPelotas = maxWidth / 32; // Número de pelotas
export var speed = 5; // Velocidad constante en píxeles por cuadro

// Función para crear una nueva pelota
export function mario() {
  var pelota = document.createElement('div');
  pelota.className = 'mario';
  document.body.appendChild(pelota);

  // Posicionar la pelota en el centro de la página
  pelota.style.left = Math.random() * maxWidth + 'px';
  pelota.style.top = Math.random() * maxHeight + 'px';

  // Asignar la velocidad constante en todas las direcciones
  var angle = Math.random() * Math.PI * 2;
  pelota.dx = Math.cos(angle) * speed;
  pelota.dy = Math.sin(angle) * speed;

  // Agregar la pelota al arreglo
  pelotas.push(pelota);
}


export function luigi() {
  var pelota = document.createElement('div');
  pelota.className = 'luigi';
  document.body.appendChild(pelota);

  // Posicionar la pelota en el centro de la página
  pelota.style.left = Math.random() * maxWidth + 'px';
  pelota.style.top = Math.random() * maxHeight + 'px';

  // Asignar la velocidad constante en todas las direcciones
  var angle = Math.random() * Math.PI * 2;
  pelota.dx = Math.cos(angle) * speed;
  pelota.dy = Math.sin(angle) * speed;

  // Agregar la pelota al arreglo
  pelotas.push(pelota);
}

export function yoshi() {
  var pelota = document.createElement('div');
  pelota.className = 'yoshi';
  document.body.appendChild(pelota);

  // Posicionar la pelota en el centro de la página
  pelota.style.left = Math.random() * maxWidth + 'px';
  pelota.style.top = Math.random() * maxHeight + 'px';

  // Asignar la velocidad constante en todas las direcciones
  var angle = Math.random() * Math.PI * 2;
  pelota.dx = Math.cos(angle) * speed;
  pelota.dy = Math.sin(angle) * speed;

  // Agregar la pelota al arreglo
  pelotas.push(pelota);
}
export function wario() {
  var pelota = document.createElement('div');
  pelota.className = 'wario';
  document.body.appendChild(pelota);

  // Posicionar la pelota en el centro de la página
  pelota.style.left = Math.random() * maxWidth + 'px';
  pelota.style.top = Math.random() * maxHeight + 'px';

  // Asignar la velocidad constante en todas las direcciones
  var angle = Math.random() * Math.PI * 2;
  pelota.dx = Math.cos(angle) * speed;
  pelota.dy = Math.sin(angle) * speed;

  // Agregar la pelota al arreglo
  pelotas.push(pelota);
}