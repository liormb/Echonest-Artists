
function sortHotttnesss(a,b) {
  if (a.hotttnesss > b.hotttnesss)
     return -1;
  if (a.hotttnesss < b.hotttnesss)
    return 1;
  return 0;
}

var colorOpacity = function(rank){
	var color = {
		r:  43 + Math.floor(rank/1.5),
		g: 100 + Math.floor(rank/1.5),
		b: 185 + Math.floor(rank/1.5),
		a: 0.95 - (rank/2.8)/100
	};
	return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
};

function effects(){
	$('.artists-list').animate({opacity: 1}, 1400, 'swing', function(){
		$(this).animate({top: 0}, 1000, 'swing', function(){
			$('header').animate({opacity: 1}, 600, 'swing');
		});
	});
}

$(function(){
	effects();
});
