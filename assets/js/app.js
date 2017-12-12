$(document).ready(function(){
  $('.fotos').hide(); // escondo todas las fotos

  /*
  *:first devuelve el primer match del selector, ese match le aplica show
  * es decir, muestra la primera foto
  */
  $('.fotos:first').show();

  /*
  * al primer círculo le doy el color rojo
  *
  */
  $('.fa-circle:first').css({'color': '#A50315'});

  /*
  * cuando al círculo se le haga click ejecutará la función paginacion
  *
  */
  $('.fa-circle').click(paginacion);


  function paginacion(){
    /*
    * this hace referencia al ícono fa-circle que se le hizo click
    * mientras que index() nos devuelve la posición comenzando desde 0.
    * Le agregamos 1 con el + 1
    */
    var circuloID = $(this).index() + 1;
    console.log(circuloID);
    /*
    * escondo todas las fotos para que la animación funcione
    */
    $('.fotos').hide();
    /*
    * a cada una de las imagenes tomo su id base y le concateno el número
    * que va variando según la posición del circulo que se clickeó
    * para finalmente aplicarle un fadeInd()
    */
    $('#img' + circuloID).fadeIn(500);
    /*
    * reseto el color de todos los círculos a blanco
    * para luego darle al círculo que se le hizo click (referencia)
    * el color rojo oscuro
    */
    $('.fa-circle').css({'color': '#FFF'});
    $(this).css({'color': '#A50315'});
  }
})