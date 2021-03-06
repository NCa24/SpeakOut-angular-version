//dados sobre aulas
angular
    .module('ClassesMod')
    .service("ClassesService", function () {

        this.module1 = [
            {
                initialize: true, //serve para inicializar o ng-if dentro do ng repeat
                hide: false,
                module: "1",
                exercise: "1",
                exSolved: false,
                exType: "exType2.html", //fazer ligaçao
                column1: [{
                    elemName: "Good afternoon",
                    elemID: 1,
                    color: "color1",
                    value: false
                }, {
                    elemName: "Good morning",
                    elemID: 2,
                    color: "color2",
                    value: false
                }, {
                    elemName: "Good evening",
                    elemID: 3,
                    color: "color3",
                    value: false
                }, {
                    elemName: "Good night",
                    elemID: 4,
                    color: "color4",
                    value: false
                }, {
                    elemName: "Hello!",
                    elemID: 5,
                    color: "color5",
                    value: false
                }],
                column2: [{
                    elemName: "10:00 am",
                    elemID: 2,
                    value: false,
                    color: null,
                    ansVal: Number
                }, {
                    elemName: "03:00 pm",
                    elemID: 1,
                    value: false,
                    color: null,
                    ansVal: Number
                }, {
                    elemName: "07:00 pm",
                    elemID: 3,
                    value: false,
                    color: null,
                    ansVal: Number
                }, {
                    elemName: "Olá!",
                    elemID: 5,
                    value: false,
                    color: null,
                    ansVal: Number
                }, {
                    elemName: "10:00 pm",
                    elemID: 4,
                    value: false,
                    color: null,
                    ansVal: Number
                }]
        },
            {
                module: "1",
                exercise: "2",
                hide: false,
                exSolved: false, //responder usando input
                exType: "exType3.html",
                question: "Traduz: Olá! Boa tarde",
                answer: "Hello! Good afternoon"
        },
            {
                module: "1",
                exercise: "3",
                hide: false,
                exSolved: false,
                exType: "exType3.html",
                question: "Traduz: Do you speak Portuguese?",
                answer: "Falas Portugues?"
        }
    ];

    });
