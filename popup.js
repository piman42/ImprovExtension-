var myApp = angular.module('myApp',[]);

myApp.controller('improvWriter', ['$scope', function($scope) {
  $scope.totalSentance = 4;

  $scope.sentances = chrome.storage.sync.get('myAwesomeStory');

  $scope.addSentance = function() {
    $scope.sentances.push({text:$scope.formSentance});
    $scope.formSentance = '';
    chrome.storage.sync.set({'myAwesomeStory' : sentances })
  };
}]);
