let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/nature-landscape.png') {
		myImage.setAttribute('src', 'images/water-landscape.png');
		myImage.setAttribute('alt', 'Lake Landscape');
	} else {
		myImage.setAttribute('src', 'images/nature-landscape.png');
		myImage.setAttribute('alt', 'Sunset Landscape');
	}
}

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = myName + ' is cool';
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + ' is cool';
}

myButton.onclick = function() {
	setUserName();
}