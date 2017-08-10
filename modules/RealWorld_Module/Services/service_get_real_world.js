//dados sobre real world
angular
    .module('RealWorldMod')
    .service("RealWorldService", function(){
    var realWorldService = {};
    realWorldService.realWorldInfo = [
        {section: "Sports", article: "1"},
        {section: "Sports", article: "2"}
    ];
    return realWorldService;
});