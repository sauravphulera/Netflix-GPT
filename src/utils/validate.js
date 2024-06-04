export const checkValidFormData = (email, password) => {

	// eslint-disable-next-line
	const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);

	// eslint-disable-next-line
	const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!isEmailValid) return 'Please Enter a Valid Email';
	if (!isPasswordValid) return 'Please Enter a Valid Password';

	return null;
}