import React, { useEffect, useRef } from 'react'
import { logo } from '../assets/logo'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { updateLanguage } from '../utils/configSlice';
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user)

	const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

	const selectLangInput = useRef();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid, email, displayName, photoURL }));
				navigate('/browse')
			} else {
				// User is signed out
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


	const handleLanguageChange = () => {
		if (selectLangInput?.current?.value) {
			dispatch(updateLanguage(selectLangInput?.current?.value))
		}
	}

	const handleGptSearchClick = () => {
		// toggle gpt search
		dispatch(toggleGptSearchView());
	}

	const handleSignOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
			navigate("/error")
			console.log(error)
		});
	}
	return (
		<div className="absolute w-screen px-16 py-8 bg-gradient-to-b from-black z-50 flex justify-between items-center">
			<div>
				{logo}
			</div>
			<div className='flex items-center'>
				{
					user && (
						<>
							{showGptSearch &&
								<div>
									<select className='bg-black text-white cursor-pointer p mr-4 focus:outline-none' ref={selectLangInput} onChange={handleLanguageChange}>
										{
											SUPPORTED_LANGUAGES.map((lang) => {
												return <option value={lang.key} key={lang.key}>{lang.name}</option>
											})
										}
									</select>
								</div>}
							<button className='px-4 py-1 rounded-sm font-semibold mr-4 text-white bg-red-600' onClick={handleGptSearchClick}>
								{showGptSearch ? 'HomePage' : 'GPT Search'}
							</button>
							<div className='cursor-pointer' onClick={handleSignOut}>
								<img alt='user' src={user?.payload?.photoURL} />
							</div>
						</>

					)
				}
			</div>

		</div>
	)
}

export default Header