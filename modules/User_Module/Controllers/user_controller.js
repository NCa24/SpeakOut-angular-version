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
                if (width >= $scope.userList[0].progress) { //a barra evolui ate ao progresso do utilizador
                  clearInterval(id);
                } else {
                  width++; 
                  elem.style.width = width + '%'; 
                  elem.innerHTML = width * 1  + '%';
                }
            }
        }
        
        
        
        $scope.userInterests = [
            {
                Interest: "Sports",
                value: false, //valor que vai definir se o utilizador tem este interesse ou nao
                state: false, //valor usado para fazer o toggle e ng-show do sub menu
                subInterests: [
                    {
                        Interest: "Basketball",
                        value: false                        
                    },
                    {
                        Interest: "Football",
                        value: false,
                    },
                    {
                        Interest: "Tennis",
                        value: false,
                    }
                ]
            },
            {
                Interest: "Politics",
                value: false,
                state: false,
                subInterests: [
                    {
                        Interest: "World Politics",
                        value: false                        
                    },
                    {
                        Interest: "Theoretical Politics",
                        value: false,
                    },
                    {
                        Interest: "Past Politics",
                        value: false,
                    }
                ]
            },
            {
                Interest: "Cinema",
                value: false,
                state: false,
            },
            {
                Interest: "Music",
                value: false,
                state: false,
            }
        ];
        
        $scope.setInterests = function(interest){
            interest.value = !interest.value;
        };
        
        
        $scope.toggle = function(interest) {
            interest.state = !interest.state;
        };
        
        
    
    }]);