angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addLink(link)
      .success(function(data, status, headers, config) {
      })
      .error(function(data, status, headers, config) {
      })
  };

});
