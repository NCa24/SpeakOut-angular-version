angular
    .module('RealWorldMod')
    .controller("RealWorldListController", ["$scope","$stateParams", "RealWorldService", function($scope, $stateParams, RealWorldService){
        
        $scope.currentArticle = $stateParams.article;
        $scope.articlesList = RealWorldService.realWorldInfo;
        $scope.getArticles = $scope.articlesList[0];
        $scope.rate = 0;
        $scope.max = 10;
        
        $scope.changeArticle = function(article){
            $scope.getArticles = article;
            $state.go("articles_route", {article: $scope.getArticles});
            console.log($scope.getArticles);
        };
        
        
    }]);