$(document).ready(function(){
	
	$("#theme")[0].play();

	$("modal").bind("click", function(e) {
		$("modal").hide();
	});

	$(".character").bind("click", function(e){
		$(".border").removeClass("border");
		$(e.target).addClass("border");

		var audio = $("#select")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();

		var modal = $("#modal");
		modal.show();
	});
});