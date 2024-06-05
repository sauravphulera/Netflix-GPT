import React, { useEffect, useRef } from 'react'
import { logo } from '../assets/logo'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((store) => store.user)
	console.log(user);


	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				console.log(uid, 'user logged in', email, displayName, photoURL)
				dispatch(addUser({ uid, email, displayName, photoURL }));
				navigate('/browse')
			} else {
				// User is signed out
				console.log('user logged out')
				dispatch(removeUser());
				navigate("/")

			}
		});


		// when component unmounts
		return () => {
			// unsubscribe on state change
			unsubscribe();
		}
	}, [])


	const handleSignOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			console.log('user signed out');
		}).catch((error) => {
			// An error happened.
			navigate("/error")
			console.log(error)
		});
	}
	return (
		<div className="absolute w-screen px-16 py-8 bg-gradient-to-b from-black z-50 flex justify-between">
			<div>
				{logo}
			</div>
			{user && <div className='cursor-pointer' onClick={handleSignOut}>
				<img alt='user' src={user?.payload?.photoURL} />
			</div>}
		</div>
	)
}

export default Header