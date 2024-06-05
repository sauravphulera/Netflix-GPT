import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
import { logo } from '../assets/logo';

const Login = () => {

	const dispatch = useDispatch();

	const [errMessage, setErrMessage] = useState(null);

	const [isSigninForm, setIsSigninForm] = useState(true);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const togggleSigninForm = () => {
		setIsSigninForm(!isSigninForm);
	}

	const handleBtnClick = () => {
		// Validate the form data
		console.log(email, password)
		const msg = checkValidFormData(email.current.value, password.current.value);
		if (msg) {
			setErrMessage(msg);
			return;
		}
		if (!isSigninForm) {
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed up 
					const user = userCredential.user;
					console.log(user);
					updateProfile(user, {
						displayName: name.current.value, photoURL: USER_AVATAR
					}).then(() => {
						const { uid, email, displayName, photoURL } = auth.currentUser;
						dispatch(addUser({ uid, email, displayName, photoURL }));
					}).catch((error) => {
						// An error occurred
						setErrMessage(error.message)
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, "-", errorMessage);
					//setErrMessage(errorMessage);
				});
		} else {
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}
	}

	return (
		<div>
			<div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-screen" >
				<Header />

				<div className='flex justify-center items-center h-[calc(100%-96px)]'>
					<form onSubmit={(e) => e.preventDefault()} className='bg-[rgba(0,0,0,0.75)] flex flex-col items-center justify-center py-[48px] px-12 rounded-md w-fit gap-[16px]'>
						<div className='text-white font-bold text-3xl mb-2 self-start'>{isSigninForm ? 'Sign in' : 'Sign Up'}</div>
						<div className='w-[300px] flex flex-col gap-[10px]'>
							{!isSigninForm && (
								<input ref={name} type='text' className='mb-5 border text-white bg-[rgba(89,91,93,0.38)] mt-2 px-2 py-4 focus:outline-none focus:border-red-700 focus:border' name='name' placeholder='Enter Full name' />
							)}
							<input ref={email} type='text' className='mb-5 border text-white bg-[rgba(89,91,93,0.38)] mt-2 px-2 py-4 focus:outline-none focus:border-red-700 focus:border' name='username' placeholder='Enter User Name' />
							<input ref={password} type='text' className='border text-white bg-[rgba(89,91,93,0.38)] mt-2 px-2 py-4 focus:outline-none focus:border-red-700 focus:border' name='password' placeholder='Enter Password' />
							<p className='text-red-500 text-[12px] font-bold'>{errMessage}</p>
							<button className='py-2 px-4 bg-red-700 text-white rounded-md mt-2' onClick={handleBtnClick}>{isSigninForm ? 'Sign in' : 'Sign Up'}</button>
						</div>

						<div className='mt-4 text-white text-[12px]' onClick={togggleSigninForm}>
							{isSigninForm ? 'New To Netflix?' : 'Already Registered ?'} <span className='cursor-pointer hover:text-red-500'>{isSigninForm ? 'Sign Up Now' : 'Sign In Now'}</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login