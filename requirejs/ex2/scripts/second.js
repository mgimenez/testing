define(['first'], function(myBody) {

	alert('second.js is loaded!');
	myBody.style.backgroundColor = 'red';
	var myMain = document.querySelector('main');

	return myMain;

})