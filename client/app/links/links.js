angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .success(function(data, status, headers, config) {
        $scope.data.links = data;
      })
      .error(function(data, status, headers, config) {
      })
  };

  $scope.getLinks();

});
