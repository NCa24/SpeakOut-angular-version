angular
    .module('ClassesMod')
    .controller("ClassesListController", ["$scope", "$stateParams", "UserService", "ClassesService", "RealWorldService", function ($scope, $stateParams, UserService, ClassesService, realWorldService) {

        $scope.classesList = ClassesService.classesInfo;


        //NAO ESQUECER DE ALTERAR CSS DOS ID E CLASSES ABAIXO inicio do exercicio 1 de arrastar

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

            } else {

                $scope.showAnswer = false;
            }
        }

        //fim do exercicio 1 de arrastar

        //exercicio 2 de ligar caixas dum lado e doutro

        $scope.Column1 = [
            {
                sentence: "string1",
                value: false,
                color: "yellow",
                ansID: 1,
        },
            {
                sentence: "string2",
                value: false,
                color: "green",
                ansID: 2,
            },
            {
                sentence: "string3",
                value: false,
                color: "red",
                ansID: 3,
            }
        ];

        $scope.Column2 = [
            {
                sentence: "string4",
                value: false,
                color: null,
                ansID: 1,
                ansVal: Number
        },
            {
                sentence: "string5",
                value: false,
                color: null,
                ansID: 2,
                ansVal: Number
            },
            {
                sentence: "string6",
                value: false,
                color: null,
                ansID: 3,
                ansVal: Number
            }
        ];

        $scope.colorToImport = String;
        $scope.AnsValToImport = Number;

        $scope.ChangeColorAndValue = function (item) {

            item.value = !item.value;
            $scope.colorToImport = item.color;
            $scope.AnsValToImport = item.ansID;

        };

        $scope.ChangeColorAndValue2 = function (item) {

            item.value = !item.value;
            item.color = $scope.colorToImport;
            item.ansVal = $scope.AnsValToImport;
        };

        $scope.showAnswer2 = false;

        $scope.checkAnswer2 = function () {

            for (var i = 0; i < $scope.Column2.length; i++){
                if ($scope.Column2[i].ansID === $scope.Column2[i].ansVal && i === $scope.Column2.length - 1) {
                    $scope.showAnswer2 = true;
                } else if ($scope.Column2[i].ansID === $scope.Column2[i].ansVal) {
                    continue;
                } else {
                    $scope.showAnswer2 = false;
                    break;
                };
            }
        }
    }]);
