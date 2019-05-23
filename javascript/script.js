$(document).ready(function(){

    $('.toasty')
    .bind('animationiteration', function() {
        $("#toasty")[0].play()
    });

	$("#modal").bind("click", function(e) {
		$("#modal").hide();
	});

	$("#startButton").bind("click", function(e) {
		$("#start").hide();
		$("#toasty")[0].play();
		$("#theme")[0].play();
	});

	$(".character").bind("click", function(e){
		$(".border").removeClass("border");
		$(e.target).addClass("border");

		var data = $(e.target.parentElement).data();

		$("#modalPortrait").attr("src", data.picture);
		$("#modalFatality").html(data.fatality);
		$("#modalQuote").html(data.quote);
		$("#modalName").html(data.name + ", #" + data.number);
		$("#modalNickname").html(data.nickname);
		$("#modalHeight").html(data.height);
		$("#modalWeight").html(data.weight);
		$("#modalAge").html(data.age);

		var audio = $("#select")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();

		var modal = $("#modal");
		modal.show();
	});
});