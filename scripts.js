document.addEventListener('DOMContentLoaded', () => {

  var botonMenu = document.getElementById('menu-toggle');
  var menuEnlaces = document.getElementById('cabecera-menu');
  var enlaces = document.querySelectorAll('.cabecera-menu a');

  if (botonMenu && menuEnlaces) {
    botonMenu.addEventListener('click', () => {
      menuEnlaces.classList.toggle('mostrar');
    });

    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        menuEnlaces.classList.remove('mostrar');
      });
    });
  }

 
  var modal = document.getElementById('portfolio-modal');
  var modalImg = document.getElementById('modal-imagen');
  var botonCerrar = document.querySelector('.modal-cerrar');
  
  
  var imagenesPortafolio = document.querySelectorAll('#sec-portafolio img');

 
  imagenesPortafolio.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex'; 
      modalImg.src = img.src;       
      modalImg.alt = img.alt;        
    });
  });

 
  botonCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

 
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  
  
  var relojContenedor = document.getElementById('reloj-contenedor');

  function actualizarReloj() {
    var ahora = new Date();

   
    var opcionesFecha = { weekday: 'short', day: '2-digit', month: 'short' };
    var fechaTexto = ahora.toLocaleDateString('es-ES', opcionesFecha);

    
    var horas = String(ahora.getHours()).padStart(2, '0');
    var minutos = String(ahora.getMinutes()).padStart(2, '0');
    var segundos = String(ahora.getSeconds()).padStart(2, '0');

    
    if (relojContenedor) {
      relojContenedor.textContent = `${fechaTexto.toUpperCase()} | ${horas}:${minutos}:${segundos}`;
    }
  }


  actualizarReloj();
  
  
  setInterval(actualizarReloj, 1000);
});
