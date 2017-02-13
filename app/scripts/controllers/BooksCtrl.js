(function() {
     function BooksCtrl(Books,DataService) {
        this.blah = "blah";
        this.description = Books.appDesc;
        var that = this;

        DataService.getAllBooks()
          .then(getBooksSuccess, getBooksError);

        function getBooksSuccess(book){
          that.theBook = book;
        };

        function getBooksError(reason){
          console.log("getting books broke");
        };


     }
     angular
         .module('servicelesson')
         .controller('BooksCtrl', ['Books','DataService', BooksCtrl])
 })();
