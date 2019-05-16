$(document).ready(function(){
	
	console.log($("#theme")[0].playing, "IS IT PLAYING?");

	$(".character").bind("click", function(e){
		$(".border").removeClass("border");
		$(e.target).addClass("border");

		var audio = $("#select")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	});
});