
function buttonClickedHandle(){
	$('.navigation button').on('click', function(){
		$('.navigation button').removeClass('btn-danger').addClass('btn-default');
		$(this).toggleClass('btn-default btn-danger');
	});
}

function effects(){
	$('.artists-list').delay(700).animate({opacity: 1}, 900, 'swing', function(){
		$(this).animate({top: 0}, 1000, 'swing', function(){
			$('header').animate({opacity: 1}, 600, 'swing');
		});
	});
}

$(function(){
	buttonClickedHandle();
	effects();
});
