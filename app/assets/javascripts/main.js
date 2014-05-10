
var colorOpacity = function(hotttnesss, index){
	var color = {
		r:  73 + index,
		g: 130 + index,
		b: 185 + index,
		a: Math.pow(hotttnesss/100, 2)
	};

	for (gradient in color){
		if (color.gradient > 255 && gradient != "a") color.gradient = 255;
	}
	return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
};

function effects(){
	$('.artists-list').animate({opacity: 1}, 1400, 'swing', function(){
		$(this).animate({top: 240}, 1000, 'swing');
	});
}

$(function(){
	effects();
});