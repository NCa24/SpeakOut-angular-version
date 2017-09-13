//identificaçao das diferentes rotas
//nota: falta corrigir/criar rota para "home"

angular
    .module('langLearn')
    .config(["$stateProvider", "UserServiceProvider", "ClassesServiceProvider", "RealWorldServiceProvider", function ($stateProvider, UserServiceProvider, ClassesServiceProvider, RealWorldServiceProvider) {
        $stateProvider
            .state("/", {
                templateUrl: "index.html",
                controller: "UserListController"
            })
            .state('users', {
                url: '/user/:username',
                templateUrl: "views/userProfile.html",
                controller: "UserListController",
                params: {
                    username: UserServiceProvider.$get().userInfo[0].firstName
                } //UserConstant.userInfo["0"].firstName
            })
            .state("dashboard", {
                url: "/your_dashboard",
                templateUrl: "views/dashboard.html",
                controller: "UserListController"
            })
            .state('classes_route', {
                url: '/classes/class/:aula',
                templateUrl: "views/partialsExercises/class.html",
                params: {
                    aula: ClassesServiceProvider.$get().classesInfo[0].lesson
                }
            })
            .state('classesModules_route', {
                url: '/classes/modules',
                templateUrl: "views/classesModules.html",
                controller: "ClassesListController"
            })
            .state('articles_route', {
                url: '/realworld/article/:article',
                templateUrl: "views/article.html",
                params: {
                    article: null
                }
            })

        /*.otherwise({
            redirectTo: "/"
        })*/
    }]);
