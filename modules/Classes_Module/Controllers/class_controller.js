angular
    .module('ClassesMod')
    .controller("ClassesListController", ["$scope", "$stateParams", "UserService", "ClassesService", "RealWorldService", function ($scope, $stateParams, UserService, ClassesService, realWorldService) {

        //$scope.classesList = ClassesService.classesInfo; para activar se estiver a dar erros. este foi o vector original e ha codigo que pode estar escrito em funçao disto.

        $scope.module1 = ClassesService.module1;
        $scope.toggle = function (val) {
            val.hide = !val.hide;
        };
    }]);


angular
    .module("ClassesMod")
    .controller("exType1Controller", ["$scope", function ($scope) {


        $(".contentSource li").draggable({
            helper: "clone"
        });

        $("#square1").droppable({
            drop: function (event, ui) {
                $('#countries').append(ui.draggable);
            }
        });

        $("#square2").droppable({
            drop: function (event, ui) {
                $("#cities").append(ui.draggable);
            }
        });



        $scope.showAnswer = false;

        $scope.checkAnswer = function () {
            $scope.exercise1 = $("#square2 .city").length === 2;
            $scope.exercise2 = $("#square1 .country").length === 2;

            if ($scope.exercise1 === true && $scope.exercise2 === true) {

                $scope.showAnswer = true;
                $scope.classesList[0].complete = true; //esta variavel esta na scope do controloador principal das Classes, mas como este controlador é chamado dentro desse principal, tem acesso a essa variável

            } else {

                $scope.showAnswer = false;
            }
        }

    }]);

angular
    .module("ClassesMod")
    .controller("exType2Controller", ["$scope", function ($scope) {

        /*$scope.random = function () {

            return 0.5 - Math.random();

        };*/


        $scope.getData = function (obj) {
            $scope.exerciseDB = obj;
        };
        $scope.toggle = function (val) {
            val.hide = !val.hide;
        }

        /*$scope.Column1 = $scope.exerciseDB.column1;

        $scope.Column2 = $scope.exerciseDB.column2;

        var color1 = "color1";
        var color2 = "color2";
        var color3 = "color3";
        var color4 = "color4";
        var color5 = "color5";

        $scope.col1 = {};

        for(var i = 0; i < $scope.exerciseDB.column1; i++){
            
        }*/


        $scope.colorToImport = String;
        $scope.AnsValToImport = Number;

        $scope.ChangeColorAndValue = function (item) {

            item.value = !item.value;
            $scope.colorToImport = item.color;
            $scope.AnsValToImport = item.elemID;

        };

        $scope.ChangeColorAndValue2 = function (item) {

            item.value = !item.value;
            item.color = $scope.colorToImport;
            item.ansVal = $scope.AnsValToImport;
        };

        $scope.showAnswer2 = false;

        $scope.checkAnswer2 = function () {

            for (var i = 0; i < $scope.Column2.length; i++) {
                if ($scope.Column2[i].elemID === $scope.Column2[i].ansVal && i === $scope.Column2.length - 1) {
                    $scope.showAnswer2 = true;
                    $scope.exercise.exSolved = true;
                    $scope.exercise.hide = true;
                } else if ($scope.Column2[i].elemID === $scope.Column2[i].ansVal) {
                    continue;
                } else {
                    $scope.showAnswer2 = false;
                    break;
                };
            }
        }
            }]);

angular
    .module("ClassesMod")
    .controller("exType3Controller", ["$scope", function ($scope) {

        $scope.getData = function (obj) {
            $scope.exercise = obj;
        };
        $scope.userAnswer = "";
        $scope.showAnswer3 = false;
        $scope.correctAns = $scope.exercise.answer;
        $scope.checkAnswer3 = function () {
            $scope.userAnswer = $scope.userAnswer.toLowerCase();
            $scope.correctAns = $scope.correctAns.toLowerCase();
            if ($scope.userAnswer === $scope.correctAns) {
                $scope.showAnswer3 = true;
                $scope.exercise.exSolved = true;
                $scope.exercise.hide = true;
            }
        };

    }]);

angular
    .module("ClassesMod")
    .controller("exType4Controller", ["$scope", function ($scope) {


    }]);


angular
    .module("ClassesMod")
    .controller("exType5Controller", ["$scope", "$timeout", function ($scope, $timeout) { //$timeout injection makes Angular run before jquery
        $scope.exDragDrop = [
            {
                name: "john",
                ansID: 1
            },
            {
                name: "Edward",
                ansID: 0
            },
            {
                name: "Carl",
                ansID: 2
            }
        ];
        /*$scope.fun = function ($event) {
            $scope.three = angular.element($event.target).attr('data-value');;
            console.log($scope.three);
        }*/

        $timeout(function () {
            {
                $(".source").draggable({
                    helper: "clone"
                })
            }
        });

        $timeout(function () {
            {
                $(".receiver").droppable({
                    drop: function (event, ui) {
                        var targetElem = $(this).attr("id");
                        $(ui.draggable).appendTo(this);
                    }
                });
            }
        });

        $scope.showAnswer5 = false;
        $scope.loopCheck = [];
        $scope.checkAnswer5 = function () {
            $(".receiver").each(function (index) {
                console.log($(this).find('.content').attr('data-value'));
                console.log(index);
                if ($(this).find('.content').attr('data-value') == index) {
                    $scope.loopCheck.push(true);
                } else {
                    $scope.loopCheck.push(false);
                };

            });
            console.log($scope.loopCheck);

            for (var i = 0; i < $scope.loopCheck.length; i++) {
                if (($scope.loopCheck.length - 1 === i) && $scope.loopCheck[i] === true) {
                    $scope.showAnswer5 = true;
                    $scope.loopCheck = [];
                } else if ($scope.loopCheck[i] === true) {
                    continue;
                } else {
                    $scope.showAnswer5 = false;
                    $scope.loopCheck = [];
                    break;
                }
            }
        };
    }]);

angular
    .module("ClassesMod")
    .controller("exType6Controller", ["$scope", "$timeout", function ($scope, $timeout) {
        $scope.toDrag = ["ola a", "ola b", "ola c", "ola d", "ola e", "ola f"];
        $scope.toDragLength = $scope.toDrag.length;

        $timeout(function () {
            {
                $('.toWrap').wrapAll('<div class="wrappedStairs"/>');
                $(".wrappedStairs").width($scope.toDrag.length * 90);
             
        }});

    }]);
