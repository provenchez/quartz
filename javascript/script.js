$(document).ready(function(){
	
	console.log('JQUERY LOADED', $)	
	
	$(".character").bind("click", function(e){
		$(".character").removeClass("border")
		$(e.target).addClass("border");
	});

	console.log($(".character"))
});