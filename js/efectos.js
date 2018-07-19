$(document).ready(function(){

	// ------MENU------

	$(".logo").each(function(index, el) {
		
		$(this).css({ opacity: "0" });
		$(this).animate({opacity: 1},3000 );
	});

	//------HEADER------

	$(".texto-primero").css({opacity: 0, marginLeft: -300});
	$(".texto-primero").animate({opacity: 1, marginLeft: 0}, 3000);

	$(".linea").css({opacity: 0});
	$(".linea").animate({opacity: 1}, 3000);

	$(".texto-segundo").css({opacity: 0, marginRight: -300});
	$(".texto-segundo").animate({opacity: 1, marginRight: 0}, 3000);

	$(".contenedor-btn").each(function(index, el) {
		$(this).css({opacity: "0", marginTop: "200px"});
		$(this).animate({opacity: 1, marginTop: 0},4000);
	});
});