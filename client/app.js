var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
$routeProvider
        .when('/', {
          templateUrl: '/partials/login.html',
          controller: 'userController',
      })
         .when('/dashboard', {
          templateUrl: '/partials/dashboard.html',
          controller: 'dashboardController',
      })
         .when('/topics/:id', {
          templateUrl: '/partials/topic.html',
          controller: 'topicController',
      })
         .when('/users/:id', {
          templateUrl: '/partials/user.html',
          controller: 'userController',
      })
        .otherwise({
          redirectTo: '/'
        });
});

