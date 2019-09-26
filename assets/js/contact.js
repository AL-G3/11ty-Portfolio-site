const myForm = document.querySelector('#myForm');
console.log(myForm);

const url = "https://api.a-garcia.com/contact";

myForm.addEventListener('onsubmit',  (e) => {
	e.preventDefault();

	
	const nameOfSender = document.getElementById('name').value;
	const emailOfSender = document.getElementById('email');
	const messageOfSender = document.getElementById('message');

	const formData = new FormData();
	formData.append('name', nameOfSender);
	console.log(formData);
});     

