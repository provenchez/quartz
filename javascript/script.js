$(document).ready(function(){
	
	console.log('JQUERY LOADED', $)	
	
	$(".character").bind("click", function(e){
		console.log('SELECTION DE ', e);
	});

	console.log($(".character"))
});