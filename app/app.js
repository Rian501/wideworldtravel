'use strict';
console.log("the app is linked");
const myApp=angular.module('travelApp',[]);

myApp.factory("BookFactory", function ($q, $http) {
	function getBooks() {
		return $q( (resolve, reject) => {
			$http.get('../data/guides.json')
			.then( (books) => {
				resolve(books);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}
	return { getBooks };
});

// myApp.controller("BookController", function($scope, BookFactory) {
// 	BookFactory.getBooks()
// 	.then( (booksData) => {
// 		$scope.books = booksData.data.guides;
// 		console.log("books?", $scope.books);
// 	})
// });