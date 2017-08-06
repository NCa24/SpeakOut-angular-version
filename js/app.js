var app = angular.module('langLearn', ["ngRoute"]);

//identificaçao das diferentes rotas
//nota: falta corrigir/criar rota para "home"
app.config(function($routeProvider){
     $routeProvider
    .when("#",{
        templateUrl: "index.html",
        controller: "UserListController"
    })
    .when("/users/profile/:user",{
        templateUrl: "view/userProfile.html",
        controller: "UserListController"
    })
    .when("/your_dashboard",{
        templateUrl: "view/dashboard.html",
        controller: "UserListController"
    })
    .when("/classes/class/:id",{
        templateUrl: "view/class.html",
        controller: "ClassesListController"
    })
    .when("/realworld/article/:id",{
        templateUrl: "view/article.html",
        controller: "RealWorldListController"
    })
    .otherwise({
        redirectTo: "/"
    })
});

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

app.controller("UserListController", ["$scope","$routeParams", "UserService", "ClassesService", "RealWorldService", function($scope, $routeParams, userService, classesService, realWorldService){
    $scope.userList = userService.userInfo;
    $scope.classesList = classesService.classesInfo;
    $scope.articlesList = realWorldService.realWorldInfo;
    
}]);

app.controller("ClassesListController", ["$scope","$routeParams", "ClassesService", function($scope, $routeParams, ClassesService){
    $scope.classesList = userService.classesInfo;
    
}]);

app.controller("RealWorldListController", ["$scope","$routeParams", "RealWorldService", function($scope, $routeParams, RealWorldService){
    $scope.articlesList = userService.realWorldInfo;
    
}]);