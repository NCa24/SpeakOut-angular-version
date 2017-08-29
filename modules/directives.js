angular
    .module('UsersMod')
    .directive("insertUsername", function(){
    return {
        restrict: "EA",
        controller: "UserListController",
        template: "<span>{{userList[0].firstName}}</span>"
    }
    
});