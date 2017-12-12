$(document).ready(()=>{
	$('.fotos').hide();
	$('.fotos:first').show(); // :first devuelve el primer match del selector
	$('.fa-circle:first').css({'color': '#A50315'});
	$('.fa-circle').click(paginacion);

/* Llamar al los id dinamicamente */
	function paginacion(){
		var circuloID = $(this).index() + 1; // la posicion del circulo que se le ha hecho click
		/*
		* this hace referencia al ícono fa-circle mientras que index() nos
		*devuelve la posición comenzando desde 0. Le agregamos 1 con el +1
		*/
		console.log(circuloID);
		$('.fotos').hide();
		// Esconder todas las fotos para que la animación funcione
		$('#img' + circuloID).fadeIn(500);
		/*Cambiar el color del circulo*/
		$('.fa-circle').css({'color': '#FFF'});
		$(this).css({'color': '#A50315'})
	}
});