angular.module('myApp')
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './views/newsfeed.html',
        controller : 'newsfeedCtrl'
    })
    .when("/user", {
        templateUrl : "./views/user-profile.html"
    })
    .when("/company", {
        templateUrl : "./views/company-profile.html"
    })
    .when("/login", {
        templateUrl : "./views/login.html"
    })
    .when("/user-list", {
        templateUrl : "./views/user-list.html",
        controller: 'userListCtrl'
    })
    .when("/project-details", {
        templateUrl : "./views/project-details.html",
        controller: 'projectDetailsCtrl'
    })
    .otherwise({
        template : "<h1 style='max-width:1400px;margin:80px'>404 Page Not Found</h1>"
    });
});