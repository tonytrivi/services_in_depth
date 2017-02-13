(function() {
  function DataService($q,$timeout) {
    var getAllBooks = function(){
      var theBook = {
          name: "Huckleberry Finn",
          description: "A story about a kid and his friend.",
          year: 1865
      };

      var deferred = $q.defer();

      $timeout(function(){
          var successful = true;
          if (successful){
            deferred.resolve(theBook);
          }
          else {
            deferred.reject('Error retrieving books.');
          }
      }, 2000);

      return deferred.promise;
    };

    return {
      getAllBooks: getAllBooks
    };
  }
  angular
    .module('servicelesson')
    .factory('DataService', ['$q','$timeout', DataService]);
})();
