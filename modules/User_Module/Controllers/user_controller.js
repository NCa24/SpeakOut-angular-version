angular
    .module('UsersMod')    
    .controller("UserListController", ["$scope","$stateParams", "UserService", "ClassesService", "RealWorldService", function($scope, $stateParams, UserService, classesService, realWorldService){
        
        $scope.userList = UserService.userInfo;
        
        $scope.classesList = classesService.classesInfo;
        
        $scope.getArticle = realWorldService.realWorldInfo[0].title;
        
        $scope.setProg = function(){
            var elem = document.getElementById("myBar");   
            var width = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= $scope.userList[0].progress) { //a barra evolui ate ao progresso do utilizador
                  clearInterval(id);
                } else {
                  width++; 
                  elem.style.width = width + '%'; 
                  elem.innerHTML = width * 1  + '%';
                }
            }
        }
        
        $scope.setInterests = function(interest){
            interest.value = !interest.value;
        };
        
        
        $scope.toggle = function(interest) {
            interest.state = !interest.state;
        };
        
        
    }]);