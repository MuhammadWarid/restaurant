angular.module('directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {

        var locations = [
        ['Bondi Beach', -25.963555,32.574422, 4],
        ['Coogee Beach', -25.963198,32.574047, 5],
        ['Cronulla Beach', -25.960960, 32.571172, 3],
        ['Manly Beach', -25.961018, 32.569864, 2],
        ['Maroubra Beach', -25.953724,32.588711, 1]
    ];



        var mapOptions = {
          center: new google.maps.LatLng(-25.96553, 32.58322),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true

        };
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});


        var count=0;


        for (count = 0; count < locations.length; count++) {  

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[count][1], locations[count][2]),
                map: map
                });

            marker.info = new google.maps.InfoWindow({
                content: locations [count][0]
                });


            google.maps.event.addListener(marker, 'click', function() {  
                // this = marker
                var marker_map = this.getMap();
                this.info.open(marker_map, this);
                // Note: If you call open() without passing a marker, the InfoWindow will use the position specified upon construction through the InfoWindowOptions object literal.
                });
        }

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }

//         var infowindow = new google.maps.InfoWindow();

//               for (i = 0; i < locations.length; i++) {
//                 marker = new google.maps.Marker({
//                     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//                     map: map
//                 });
// }


    }
  }
})


/*.directive('myInput', function(){
     return {
        restrict: 'E',
        require: 'ngModel',
        templateUrl: 'myInputTemplate.html',
        replace: true,
        scope: {
            text: '=ngModel',
            title: '=title',
            placeholder : '=placeholder'
        },            
    }
})*/;
