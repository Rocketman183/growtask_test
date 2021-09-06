const errorMessage = document.querySelectorAll('.error');
const formName = document.querySelectorAll('input')[0];
const formPhone = document.querySelectorAll('input')[1];
const formButton = document.querySelector('.button-submit');

formButton.addEventListener('click', () => {
	if (formName.value === '') {
		errorMessage[0].style.display = 'block';
	} else {
		errorMessage[0].style.display = 'none';
	}

	if (formPhone.value === '') {
		errorMessage[1].style.display = 'block';
	} else {
		errorMessage[0].style.display = 'none';
	}
})
