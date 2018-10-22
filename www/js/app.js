// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'controllers',
  'services',
  'ngCordova',
  'ngMap',
  'google-maps',
  'ngRoute'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('map', {
    url: '/map',
    templateUrl: "views/map.html",
    controller: 'MapCtrl'
  })

  .state('booking', {
    url: '/booking',
    templateUrl: "views/book.html"
  })

  .state('result', {
    url: '/result',
    templateUrl: "views/result.html"
  })

  // start states for dashbord buttons
  .state('dashboard', {
    url: '/dashboard',
    abstract: true,
    templateUrl: 'views/dash/dash.html'
  })
  .state('dashboard.destination', {
    url: '/destination',
    views: {
      'tab-dest': {
        templateUrl: 'views/dash/dash-destination.html',
        controller: 'AjaxCtrl'
      }
    }
  })
  .state('dashboard.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'views/dash/dash-home.html',
        controller: 'AjaxCtrl'
      }
    }
  })
  .state('dashboard.map', {
    url: '/map/:destination',
    views: {
      'tab-map': {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      }
    }
  })
  // end states for dashboard buttons

  $urlRouterProvider.otherwise('/dashboard/home');
})
