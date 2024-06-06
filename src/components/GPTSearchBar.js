import React from 'react'

import { lang } from '../utils/language'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

	const language = useSelector(store => store.config.language);
	console.log(language)

	return (
		<div className='flex justify-center w-full'>
			<form className='p-6 mt-[104px] w-full flex justify-center'>
				<input type='text' className='p-4 focus:outline-none w-[60%] rounded-l-sm' placeholder={lang[language].gptSearchPlaceHolder} />
				<button className='py-2 px-6 bg-red-600 text-white rounded-r-sm'>{
					lang[language].search
				}</button>
			</form>
		</div>
	)
}

export default GPTSearchBar