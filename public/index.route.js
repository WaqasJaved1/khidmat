angular.module('myApp')
.config(function($routeProvider) {
    $routeProvider
    .when("/user", {
        templateUrl : "./views/user-profile.html"
    })
    .when("/company", {
        templateUrl : "./views/company-profile.html"
    })
    .when("/login", {
        templateUrl : "./views/login.html"
    })
    .otherwise({
        template : "<h1 style='max-width:1400px;margin:80px'>404 Page Not Found</h1>"
    });
});