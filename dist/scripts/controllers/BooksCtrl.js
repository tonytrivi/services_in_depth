(function() {
     function BooksCtrl(Books) {
        this.blah = "blah";
        this.description = Books.appDesc;


     }
     angular
         .module('servicelesson')
         .controller('BooksCtrl', ['Books', BooksCtrl])
 })();
