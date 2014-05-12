
app.controller("MainCtrl", ['$scope', '$http', function($scope, $http){

	$scope.artists = [];
	$scope.field = 'hotttnesss'; // default

	$scope.init = function(){
		var self = this;
		$http.get('/artists.json')
			.success(function(data){
				angular.forEach(data, function(artist, index){
					artist.color = self.setColor(artist.hotttnesss);
					self.artists.push(artist);
				});
			})
			.error(function(error){
 				console.log(error);
      });
	};

	$scope.sortByField = function(field){
		switch(field){
			case 'hotttnesss' : this.field = 'hotttnesss' ; break;
			case 'discovery'  : this.field = 'discovery'  ; break;
			case 'familiarity': this.field = 'familiarity'; break;
			case 'score'      : this.field = 'score'      ; break;
			default: this.field = 'hotttnesss';
		}
	};

	$scope.setColor = function(hotttnesss){
		var percent = hotttnesss / 100;
		var opacity = Math.pow(percent, 0.7);
    var color   = 255 - parseInt( parseInt(Math.pow(255, opacity)) * 0.65 );
    return "rgba("+color+","+color+",255,"+opacity+")";
	};

}]);
