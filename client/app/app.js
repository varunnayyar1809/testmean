'use strict';

angular.module('woobeeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/login');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth,$state) {
	 // Change title of app
	 $rootScope.$state = $state;
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (toState.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
      // Redirect to dashboard if you're logged in
      Auth.isLoggedInAsync(function(loggedIn) {
        if (!toState.authenticate && loggedIn) {
          $location.path('/dashboard');
        }
      });
    });
  });