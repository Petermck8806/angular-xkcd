//instantiate our comicApp without dependencies
var comicApp = angular.module('comicApp', []);
var xkcdJsonString = "http://dynamic.xkcd.com/api-0/jsonp/comic/{{id}}?callback=JSON_CALLBACK";

comicApp.factory('xkcdSvc', function($http){
  return {
    getXkcdComic: function(jsonpString) {
      //return the promise directly
      return $http.jsonp(jsonpString)
        .then(function(result){
          //resolve the promise as data
          return result.data;
        });
    }
  }
});

comicApp.controller('XkcdCtrl', function($scope, xkcdSvc, $interpolate) {
  xkcdSvc.getXkcdComic("http://dynamic.xkcd.com/api-0/jsonp/comic?callback=JSON_CALLBACK").then(function(comic) {
    var id = getRandomInt(1, comic.num);

    //exclude 404 
    while(id == 404){
      id = getRandomInt(1,comic.num);
    }
    $scope.id = id;
    var comicUrl = $interpolate(xkcdJsonString)($scope);

    xkcdSvc.getXkcdComic(comicUrl).then(function(randomComic){
      $scope.xkcdRandomComic = randomComic;
    });
  });

  //return random Integer inclusive of the range
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});