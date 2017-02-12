(function() {
    function config($stateProvider,$locationProvider,$provide){
        $provide.provider('Books', function () {
          this.$get = function () {
            var appName = "tony's app";
            var appDescription = "this is an app";

            return {
              appName: appName,
              appDesc: appDescription
            };
          };

        });

        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

        $stateProvider
            .state('landing', {
                  url: '/',
                  controller: 'LandingCtrl as landing',
                  templateUrl: '/templates/landing.html'
              })
            .state('collections', {
                url: '/collections',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'

 });




    }
    angular
        .module('servicelesson', ['ui.router'])
        .constant("CONSTANTS", {
        "SESSION_TIME": 25,
        "BREAK_TIME": 5,
        "LONG_BREAK_TIME": 8
    })
    .config(config);

})();
