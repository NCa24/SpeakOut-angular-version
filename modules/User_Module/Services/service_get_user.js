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
        {
            firstName: "Jose", 
            lastName: "Silva", 
            progress: 70, 
            userInterests: [
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
        ]},
        {firstName: "Joao", lastName: "Santos", progress: 20, userInterests: ["Cooking", "Football", "Workout", "Cinema"]}
    ];
    return userService;
});