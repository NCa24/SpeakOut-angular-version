angular
    .module('RealWorldMod')
    .controller("RealWorldListController", ["$scope","stateParams", "RealWorldService", function($scope, $stateParams, RealWorldService){
        
        $scope.articlesList = RealWorldService.realWorldInfo;
    
    }]);