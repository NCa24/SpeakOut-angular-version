angular
    .module('UsersMod')    
    .controller("UserListController", ["$scope","$stateParams", "UserService", "ClassesService", "RealWorldService", function($scope, $stateParams, UserService, classesService, realWorldService){
        
        $scope.userList = UserService.userInfo;
        
        $scope.classesList = classesService.classesInfo;
        
        $scope.articlesList = realWorldService.realWorldInfo;
        
        $scope.setProg = function(){
            var elem = document.getElementById("myBar");   
            var width = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= $scope.userList[0].progress) {
                  clearInterval(id);
                } else {
                  width++; 
                  elem.style.width = width + '%'; 
                  elem.innerHTML = width * 1  + '%';
                }
            }
        }
    
    }]);