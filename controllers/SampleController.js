var sampleApp = angular.module('sampleApp',[]);

sampleApp.controller('SampleListCtrl', function($scope){
  $scope.samples = [
  {'name' : 'fake name 1',
   'snippet' : 'here is a fake description'},
   {'name' : 'fake name 2',
   'snippet': 'here is another fake description'}
   ];
});