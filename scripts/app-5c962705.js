"use strict";angular.module("responymous",["ngAnimate","ngCookies","ngTouch","ui.router","firebase"]).config(["$stateProvider","$urlRouterProvider",function(t,a){t.state("home",{url:"/",templateUrl:"app/partials/main.html",controller:"MainCtrl"}).state("student",{url:"/student",templateUrl:"app/partials/student.html"}).state("instructor",{url:"/instructor",templateUrl:"app/partials/instructor.html"}),a.otherwise("/")}]),angular.module("responymous").controller("MainCtrl",function(){}),function(t){try{t=angular.module("responymous")}catch(a){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])}(),function(t){try{t=angular.module("responymous")}catch(a){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("app/partials/instructor.html","Instructor progress bar goes HERE!")}])}(),function(t){try{t=angular.module("responymous")}catch(a){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("app/partials/main.html",'<div class="container"><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="app/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div></div>')}])}(),function(t){try{t=angular.module("responymous")}catch(a){t=angular.module("responymous",[])}t.run(["$templateCache",function(t){t.put("app/partials/student.html",'<div class="container"><h2 class="col-md-12 col-sm-12 col-xs-12">How are you tracking?</h2><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default">5 - I am pwning these concepts</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default">4 - Doing aight. I think I have a question or two</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default">3 - It\'s starting to get fuzzy...</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default">2 - So many questions. Much struggle.</button></div><div class="btn-group-vertical" role="group"><button type="button" class="btn btn-default">1 - Totally lost. Halp.</button><h1 class="col-md-12 col-sm-12 col-xs-12">Thanks for your input!</h1></div><script type="text/javascript">\n\n   var $button = $(\'.btn\');\n\n  $button.click(function(){\n\n    $button.toggleClass(\'submit\');\n'+"    $('h1').toggleClass('display-h1')\n\n    });\n\n\n\n</script></div>")}])}();