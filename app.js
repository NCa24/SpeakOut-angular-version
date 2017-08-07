var app = angular.module('langLearn', ["ui.router"]);

//dados sobre users
app.service("UserService", function(){ //é mais facil armazenar dados aqui para acesso em diferentes controllers
    var userService = {};
    userService.userInfo = [
        {firstName: "Jose", lastName: "Silva"},
        {firstName: "Joao", lastName: "Santos"}
        ];
    return userService;
});


//dados sobre aulas
app.service("ClassesService", function(){
    var classesService = {};
    classesService.classesInfo = [
        {module: 1, lesson: 1},
        {module: 1, lesson: 2}
        ];
    return classesService;
});


//dados sobre real world
app.service("RealWorldService", function(){
    var realWorldService = {};
    realWorldService.realWorldInfo = [
        {section: "Sports", article: 1},
        {section: "Sports", article: 2}
        ];
    return realWorldService;
});

//identificaçao das diferentes rotas
//nota: falta corrigir/criar rota para "home"
app.config(["$stateProvider", "UserServiceProvider", function($stateProvider, UserServiceProvider){
     $stateProvider
    .state("#",{
        templateUrl: "index.html",
        controller: "UserListController"
    })
    .state('users', {
        url: '/user/:username',
         templateUrl: "view/userProfile.html",
        controller: "UserListController",
         params: { username: UserServiceProvider.$get().userInfo[0].firstName}
           })
    .state("dashboard",{
         url : "/your_dashboard",
        templateUrl: "view/dashboard.html",
        controller: "UserListController"
    })
    .state("/classes/class/:id",{
        templateUrl: "view/class.html",
        controller: "ClassesListController"
    })
    .state("/realworld/article/:id",{
        templateUrl: "view/article.html",
        controller: "RealWorldListController"
    })
    /*.otherwise({
        redirectTo: "/"
    })*/
}]);

app.controller("UserListController", ["$scope","$stateParams", "UserService", "ClassesService", "RealWorldService", function($scope, $stateParams, UserService, classesService, realWorldService){
    
    $scope.userList = UserService.userInfo;
    $scope.classesList = classesService.classesInfo;
    $scope.articlesList = realWorldService.realWorldInfo;
    
        
}]);

app.controller("ClassesListController", ["$scope","$stateParams", "ClassesService", function($scope, stateParams, ClassesService){
    $scope.classesList = ClassesService.classesInfo;
    
}]);

app.controller("RealWorldListController", ["$scope","stateParams", "RealWorldService", function($scope, stateParams, RealWorldService){
    $scope.articlesList = RealWorldService.realWorldInfo;
    
}]);