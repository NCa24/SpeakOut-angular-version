angular
    .module('RealWorldMod')
    .controller("RealWorldListController", ["$scope","stateParams", "RealWorldService", function($scope, $stateParams, RealWorldService){
        
        $scope.articlesList = RealWorldService.realWorldInfo;
    
    }]);



angular
    .module('RealWorldMod')
    .controller("articleRating", function ($scope) {
    $scope.rate = 0;
    $scope.max = 10;

});