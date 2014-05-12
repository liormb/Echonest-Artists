
app.controller("MainCtrl", ['$scope', '$http', function($scope, $http){

	$scope.artists = [];
	$scope.field = 'hotttnesss'; // default

	$scope.init = function(){
		var self = this;
		$http.get('/artists.json')
			.success(function(data){
				angular.forEach(data, function(artist, index){
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

	$scope.colorOpacity = function(index){
		index++;
		var color = {
			r:  43 + Math.floor(index/1.5),
			g: 100 + Math.floor(index/1.5),
			b: 185 + Math.floor(index/1.5),
			a: 0.95 - (index/2.8)/100
		};
		return "rgba("+color.r+","+color.g+","+color.b+","+color.a+")";
	};

}]);
