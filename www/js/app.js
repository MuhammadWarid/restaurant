// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'controllers',
  'services',
  'ngCordova',
  'directives',
  'ngMap',
  'google-maps',
  'ngRoute'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('map', {
        url: '/map',
        templateUrl: "map.html",
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
        // abstract: true,
        templateUrl: 'views/dash/dash-home.html'
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
     .state('shop', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('shop.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('shop.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })

      .state('shop.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('shop.boots', {
        url: '/boots',
        views: {
          'menuContent': {
            templateUrl: 'templates/boots.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('shop.casual', {
        url: '/casual',
        views: {
          'menuContent': {
            templateUrl: 'templates/casual.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('shop.jordan', {
        url: '/jordan',
        views: {
          'menuContent': {
            templateUrl: 'templates/jordan.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('shop.formal', {
        url: '/formal',
        views: {
          'menuContent': {
            templateUrl: 'templates/formal.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('shop.order', {
        url: '/order',
        views: {
          'menuContent': {
            templateUrl: 'templates/sorder.html',
          }
        }
      })
        .state('rest', {
    url: '/rest',
    abstract: true,
    templateUrl: 'templates/rmenu.html',
    controller: 'HomeCtrl'
  })

  .state('rest.mimmos', {
      url: '/mimmos',
      views: {
        'menuContent': {
          templateUrl: 'templates/rmimmos.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('rest.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/rrestaurants.html',
          controller: 'HomeCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/dashboard/home');
  })
