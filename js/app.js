$(document).ready(function() {
	$('.conor').mouseenter(function() {
			console.log('mouse entered .conor div');
			$(".conor-still").hide();
			$(".conor-ready").show();
	})
	.mouseleave(function() {
		console.log("mouse left");
		$(".conor-still").show();
		$(".conor-ready").hide();
		})
	.mousedown(function() {
		console.log("mouse clicked");
		$(".conor-ready").hide();
		$(".conor-strike").show();
		$(".fire").show();

		})
	.mouseup(function() {
		console.log("mouse un-clicked");
		$(".conor-strike").hide();
		$(".conor-ready").show();

		});
});