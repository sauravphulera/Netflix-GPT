import React from 'react'
import { logo } from '../assets/logo'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
	const navigate = useNavigate();

	const user = useSelector((store) => store.user)
	console.log(user)


	const handleSignOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			console.log('user signed out');
			navigate("/");

		}).catch((error) => {
			// An error happened.
			navigate("/error")
			console.log(error)
		});
	}
	return (
		<div className='p-2 flex justify-between'>
			<div>
				{logo}
			</div>
			<div className='cursor-pointer' onClick={handleSignOut}>
				<img src={user?.payload?.photoURL} />
			</div>
		</div>
	)
}

export default Header