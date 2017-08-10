/*constant da para injectar em config

app.constant("UserConstant", {
    userInfo:[
        {firstName: "John", lastName: "Doe"},
        {firstName: "Carl", lastName: "Smith"}
    ]
})*/


//dados sobre users
angular
    .module('UsersMod')
    .service("UserService", function(){ //é mais facil armazenar dados aqui para acesso em diferentes controllers
    var userService = {};
    userService.userInfo = [
        {firstName: "Jose", lastName: "Silva", progress: 70, userInterests: ["Reading", "Travelling", "Economics", "Basketball"]},
        {firstName: "Joao", lastName: "Santos", progress: 20, userInterests: ["Cooking", "Football", "Workout", "Cinema"]}
    ];
    return userService;
});