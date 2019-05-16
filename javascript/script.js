$(document).ready(function(){
	
	console.log('JQUERY LOADED', $)	
	
	$(".character").bind("click", function(e){
		$(".border").removeClass("border")
		$(e.target).find("img").addClass("border");
	});

	console.log($(".character"))
});