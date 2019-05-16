$(document).ready(function(){
	
	console.log('JQUERY LOADED', $)	
	
	$(".character").bind("click", function(e){
		$(".border").removeClass("border");
		$(e.target).addClass("border");
		$("#select")[0].play();
	});

	console.log($(".character"))
});