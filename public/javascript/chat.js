var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function ($scope) {

	$scope.messages = [
	{
		sender: "BOT",
		text :"what can I do for you?",
		time : "06.45pm"
	},
	{
		sender:"USER",
		text:"what 1+1",
		time : "06.48am"
	},
	{
		sender:"BOT",
		text:"2",
		time : "06.50pm"
	},
	];
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };

});