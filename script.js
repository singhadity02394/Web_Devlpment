const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const dobInput = document.querySelector('#dob');
const genderInput = document.querySelector('#gender');
const courseInput = document.querySelector('#course');
const yearInput = document.querySelector('#year');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = nameInput.value.trim();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const confirmPassword = confirmPasswordInput.value.trim();
	const dob = dobInput.value.trim();
	const gender = genderInput.value.trim();
	const course = courseInput.value.trim();
}