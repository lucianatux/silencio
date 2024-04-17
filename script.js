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
          // Verificar si ya no hay pensamientos en el mundo externo
          const pensamientosRestantes = mundoExterno.querySelectorAll('.pensamiento').length;
          if (pensamientosRestantes === 0) {
              videoMundoExterno.style.display = 'block';
              textoFinal.style.display = 'block';
          }
      });
  });
