'use strict';

myApp.controller("BookController", function($scope, BookFactory) {
	BookFactory.getBooks()
	.then( (booksData) => {
		$scope.books = booksData.data.guides;
		console.log("books?", $scope.books);
	})
});