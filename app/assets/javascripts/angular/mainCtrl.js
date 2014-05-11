
app.controller("MainCtrl", ['$scope', '$http', function($scope, $http){

	$scope.artists = [];

	$scope.init = function(){
		$http.get('/artists.json')
			.success(function(data){
				//console.dir(data);
				angular.forEach(data.sort(sortHotttnesss), function(artist, index){
					artist.rank = index + 1;
					artist.color = colorOpacity(artist.rank);
					$scope.artists.push(artist);
				});
			})
			.error(function(error){
 				console.log(error);
      });
	};
}]);
