//dados sobre aulas
angular
    .module('ClassesMod')
    .service("ClassesService", function () {
        var classesService = {};
        classesService.classesInfo = [
            {
                module: "1",
                lesson: "1",
                complete: false
            },
            {
                module: "1",
                lesson: "2",
                complete: false
            }
    ];
        return classesService;
    });
