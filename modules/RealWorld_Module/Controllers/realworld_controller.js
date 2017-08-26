angular
    .module('RealWorldMod')
    .controller("RealWorldListController", ["$scope","stateParams", "RealWorldService", function($scope, $stateParams, RealWorldService){
        
        $scope.articlesList = RealWorldService.realWorldInfo;
    
    }]);



angular
    .module('RealWorldMod')
    .controller("StarRating", ["$scope", function($scope){
        
        
    }]);