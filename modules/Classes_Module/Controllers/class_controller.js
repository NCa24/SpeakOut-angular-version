angular
    .module('ClassesMod')
    .controller("ClassesListController", ["$scope","$stateParams", "UserService", "ClassesService", "RealWorldService", function($scope, $stateParams, UserService, ClassesService, realWorldService){
        
        $scope.classesList = ClassesService.classesInfo;
    
    }]);