comicApp.factory('xkcdSvc', function($http){
  return {
    getXkcdComic: function() {
      //return the promise directly
      return $http.jsonp('http://dynamic.xkcd.com/api-0/jsonp/comic?callback=JSON_CALLBACK')
        .then(function(result){
          //resolve the promise as data
          return result.data;
        });
    }
  }
});