(function() {
     function CollectionCtrl($stateParams) {
        this.blah = "collection value";
        this.portfolioId = $stateParams.portfolioId;



     }
     angular
         .module('servicelesson')
         .controller('CollectionCtrl', ['$stateParams', CollectionCtrl])
 })();
