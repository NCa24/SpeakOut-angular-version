angular
    .module('RealWorldMod')
    .controller("RealWorldListController", ["$scope","$stateParams", "$state", "RealWorldService", function($scope, $stateParams, $state, RealWorldService){
        
        $scope.articlesList = RealWorldService.realWorldInfo;
        $scope.rate = 0;
        $scope.max = 10;
        
        if(!$stateParams.article){
            $scope.selectedArticle = $scope.articlesList[0];
        }
        
        if($stateParams.article === $scope.articlesList[0].title){
            $scope.selectedArticle = $scope.articlesList[0];
        } else if($stateParams.article){
            for(var i = 1; i < $scope.articlesList.length; i++){
                if($scope.articlesList[i].title === $stateParams.article){
                    $scope.selectedArticle = $scope.articlesList[i];
                    break;
                }
            }
        }
        
        $scope.changeArticle = function(article){
        $state.go("articles_route", {article: article.title});
        };
        
        
    }]);