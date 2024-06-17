// Obtener el video de fondo y los botones
const bgVideo = document.getElementById('bg-video');
const bgButtons = document.querySelectorAll('.bg-button');

// Función para cambiar el video de fondo
function changeBackgroundVideo(src) {
  bgVideo.src = src;
  bgVideo.play();
  
  // Almacenar la selección del usuario en localStorage
  localStorage.setItem('bgVideoSrc', src);
}

// Asignar un controlador de eventos para cada botón
bgButtons.forEach(button => {
  button.addEventListener('click', () => {
    const src = button.dataset.src;
    changeBackgroundVideo(src);
  });
});

// Obtener la selección del usuario de localStorage
const bgVideoSrc = localStorage.getItem('bgVideoSrc');

// Establecer el video de fondo a la selección del usuario o al primer video si no hay selección previa
if (bgVideoSrc) {
  changeBackgroundVideo(bgVideoSrc);
} else {
  const defaultSrc = bgButtons[0].dataset.src;
  changeBackgroundVideo(defaultSrc);
}


//IMAGENES

// Obtener el contenedor de la imagen de fondo y los botones
const bgImage = document.getElementById('bg-image');
const bgimgButtons = document.querySelectorAll('.bg-button');

// Función para cambiar la imagen de fondo
function changeBackgroundImage(src) {
  bgImage.style.backgroundImage = `url(${src})`;
  
  // Almacenar la selección del usuario en localStorage
  localStorage.setItem('bgImageSrc', src);
}

// Asignar un controlador de eventos para cada botón
bgimgButtons.forEach(button => {
  button.addEventListener('click', () => {
    const src = button.dataset.src;
    changeBackgroundImage(src);
  });
});

// Obtener la selección del usuario de localStorage
const bgImageSrc = localStorage.getItem('bgImageSrc');

// Establecer la imagen de fondo a la selección del usuario o a la primera imagen si no hay selección previa
if (bgImageSrc) {
  changeBackgroundImage(bgImageSrc);
} else {
  const defaultSrc = bgimgButtons[0].dataset.src;
  changeBackgroundImage(defaultSrc);
}


//Desactivar F12 para bloquear DevToolas
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 123) { // 123 es el código de tecla de F12
      event.preventDefault(); // detiene la funcionalidad predeterminada de la tecla
  }
});


//Mantener el .CuadroBack y todo lo otro aunque refresque la pagina

//window.addEventListener("beforeunload", function() {
//  var cuadros = document.querySelectorAll(".CuadroBack, .CuadroBusqueda, .CuadroTemas, .CuadroPlanes, .CuadroModem, .CuadroMoviles, .CuadroClaroTV, .CuadroUltraWifi, .CuadroHerramientas, .CuadroFavoritos, .CuadroManuales, .CuadroEmpresa, .CuadroCalendario");
//  cuadros.forEach(function(cuadro) {
//    localStorage.setItem(cuadro.classList[0] + "Display", cuadro.style.display);
//  });
//});

//window.addEventListener("load", function() {
//  var cuadros = document.querySelectorAll(".CuadroBack, .CuadroBusqueda, .CuadroTemas, .CuadroPlanes, .CuadroModem, .CuadroMoviles, .CuadroClaroTV, .CuadroUltraWifi, .CuadroHerramientas, .CuadroFavoritos, .CuadroManuales, .CuadroEmpresa, .CuadroCalendario");
//  cuadros.forEach(function(cuadro) {
//    var display = localStorage.getItem(cuadro.classList[0] + "Display");
//    if (display) {
//      cuadro.style.display = display;
//    }
//  });
// });


//-----------------------------------Darle estilo a BackgroundV29 ---------------------------------
  // Espera a que la página cargue
  window.addEventListener('DOMContentLoaded', function () {
    // Obtén el elemento del video
    const videoElement = document.getElementById('bg-video');

    // Escucha el evento 'loadedmetadata' para asegurarse de que el video esté listo
    videoElement.addEventListener('loadedmetadata', function () {
      // Verifica si el nuevo video es "BackgroundVideo29.mp4"
      if (videoElement.src.includes('BackgroundVideo29.mp4')) {
        // Si es el video "BackgroundVideo29.mp4", agrega la clase 'video-29'
        videoElement.classList.add('video-29');
      } else {
        // Si no es "BackgroundVideo29.mp4", asegúrate de eliminar la clase 'video-29'
        videoElement.classList.remove('video-29');
      }
    });
  });
//-----------------------------------Darle estilo a BackgroundV29 FIN---------------------------------

//-----------------------------------Darle estilo a BackgroundV28 ---------------------------------
  // Espera a que la página cargue
  window.addEventListener('DOMContentLoaded', function () {
    // Obtén el elemento del video
    const videoElement = document.getElementById('bg-video');

    // Escucha el evento 'loadedmetadata' para asegurarse de que el video esté listo
    videoElement.addEventListener('loadedmetadata', function () {
      // Verifica si el nuevo video es "BackgroundVideo29.mp4"
      if (videoElement.src.includes('BackgroundVideo28.mp4')) {
        // Si es el video "BackgroundVideo29.mp4", agrega la clase 'video-29'
        videoElement.classList.add('video-28');
      } else {
        // Si no es "BackgroundVideo29.mp4", asegúrate de eliminar la clase 'video-29'
        videoElement.classList.remove('video-28');
      }
    });
  });
//-----------------------------------Darle estilo a BackgroundV28 FIN---------------------------------