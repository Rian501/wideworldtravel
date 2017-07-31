'use strict';
console.log("the app is linked");
const myApp=angular.module('travelApp',['ngRoute']);

myApp.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/guide_list.html',
		controller:'BookController'
	})
	.otherwise('/');
})

