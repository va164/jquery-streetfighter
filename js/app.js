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
		// play fire sound 
		console.log("mouse clicked");
		$(".conor-ready").hide();
		$(".conor-strike").show();
		$(".fire").finish().show()
		.animate(
			{"left": "1100px"},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '600px')
			});	
		})
	.mouseup(function() {
		console.log("mouse un-clicked");
		$(".conor-strike").hide();
		$(".conor-ready").show();
		});


	});