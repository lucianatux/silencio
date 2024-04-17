  // JavaScript
  const pensamientos = document.querySelectorAll('.pensamiento');
  const columnaVacia = document.getElementById('columnaVacia');
  const mundoExterno = document.getElementById('mundoExterno');
  const videoMundoExterno = document.getElementById('videoMundoExterno');
  const textoFinal = document.getElementById('textoFinal');

  pensamientos.forEach(pensamiento => {
      pensamiento.addEventListener('click', function () {
          columnaVacia.appendChild(pensamiento);
          // Detiene la animación del pensamiento
          pensamiento.style.animationPlayState = 'paused';
          pensamiento.style.position = 'static';
          pensamiento.style.padding = '0';
          // Verificar si ya no hay pensamientos en el mundo externo
          const pensamientosRestantes = mundoExterno.querySelectorAll('.pensamiento').length;
          if (pensamientosRestantes === 0) {
              videoMundoExterno.style.display = 'block';
              videoMundoExterno.play(); // Reproduce el video automáticamente
          }
      });
  });
  videoMundoExterno.addEventListener('ended', function() {
    // Muestra el texto final
    textoFinal.style.display = 'block';
    textoFinal.style.position = 'absolute'; // Para superponer el texto final al video
    textoFinal.style.top = '50%'; // Centra verticalmente el texto
    textoFinal.style.left = '50%'; // Centra horizontalmente el texto
    textoFinal.style.transform = 'translate(-50%, -50%)'; // Ajusta la posición para centrarlo
    textoFinal.style.color = 'white'; // Cambia el color del texto a blanco para mejorar la visibilidad
    textoFinal.style.zIndex = '10'; // Asegura que el texto esté por encima del video
});
