 angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
 

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.value('cartStorage', {
    items: []
})


.controller('mainController', function(cartStorage) {
    var _this = this;
    _this.cartStorage = cartStorage;

    _this.items = [{
        name: 'Pepperoni Pizza',
        price: 500,
        img: "../img/pizza.jpg",
        select: {i1 : "small", i2 : "medium", i3: "Large"},
        quantity: 0,
        total: 0,
        showAddToCart: false,
        addedToCart: false
    }, {
        name: 'Margharita Pizza',
        price: 400,
        img: "../img/pizza1.jpg",
        select: {i1 : "small", i2 : "medium", i3: "Large"},
        quantity: 0,
        total: 0,
        showAddToCart: false,
        addedToCart: false
    }, {
        name: 'BBQ Chicken',
        price: 450,
        img: "../img/pizza2.jpg",
        select: {i1 : "small", i2 : "medium", i3: "Large"},
        quantity: 0,
        total: 0,
        showAddToCart: false,
        addedToCart: false
    }];
    
    _this.addToCart = function(item) {
        _this.cartStorage.items.push(item);
        item.addedToCart = true;
    }

    _this.increaseItemAmount = function(item) {
        item.quantity++;
        item.total = item.quantity * item.price;
        item.showAddToCart = true;
    }

    _this.decreaseItemAmount = function(item) {
        item.quantity--;
        item.total = item.total - item.price;
        if (item.quantity <= 0) {
            item.quantity = 0;
            item.addedToCart = false;
            item.showAddToCart = false;
            var itemIndex = _this.cartStorage.items.indexOf(item);
            if (itemIndex > -1) {
                _this.cartStorage.items.splice(itemIndex, 1);

            }
        } else {
            item.showAddToCart = true;
        }
    }
})



.controller('cartController', function(cartStorage, $scope) {
    var _this = this;
    _this.cartStorage = cartStorage;

    _this.increaseItemAmount = function(item, total) {
        item.quantity++;

        item.total = item.quantity * item.price;
    }

    _this.decreaseItemAmount = function(item) {
        item.quantity--;
        item.total = item.total - item.price;
        if (item.quantity <= 0) {
            item.quantity = 0;
            item.addedToCart = false;
            item.showAddToCart = false;
            var itemIndex = _this.cartStorage.items.indexOf(item);
            if (itemIndex > -1) {
                _this.cartStorage.items.splice(itemIndex, 1);
                 
            }
        }


    }

    _this.removeFromCart = function(item) {
        item.quantity = 0;
        item.addedToCart = false;
        item.showAddToCart = false;
        var itemIndex = _this.cartStorage.items.indexOf(item);
        if (itemIndex > -1) {
            _this.cartStorage.items.splice(itemIndex, 1);
        }
    }

    _this.grandTotal = function(item) {

        var sum = 0;

        sum += item.total;

        return sum;
    }
    

    
})

