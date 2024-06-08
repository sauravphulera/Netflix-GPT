import React, { useRef } from 'react'

import { lang } from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/geminiAI';
import { API_OPTIONS, SEARCH_API_URL } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {

	const searchInput = useRef('');
	const dispatch = useDispatch();

	const language = useSelector(store => store.config.language);

	const searchMovies = async (movie) => {
		const res = await fetch(SEARCH_API_URL + movie, API_OPTIONS);

		const json = await res.json();

		return json;
	}

	const handleGptSearchClick = async () => {
		// make an api call to get movie results
		const prompt = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchInput.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Rockstar, Sholay, DON, Golmaal Returns"

		const result = await model.generateContent(prompt);
		const response = await result.response;
		const resultString = response.text().trim();

		const gptMovies = resultString.split(', ').map((movie) => movie.trim());

		const promiseArr = gptMovies.map((movie) => searchMovies(movie))

		console.log(gptMovies)
		const data = await Promise.all(promiseArr)
		//call search api for all movies

		console.log(data);
		dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: data }));


		//console.log(resultString);
	}

	return (
		<div className='flex justify-center w-full'>
			<form className='p-6 mt-[104px] flex justify-center bg-black w-[60%]' onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					className='p-4 focus:outline-none w-[90%] rounded-l-sm'
					placeholder={lang[language].gptSearchPlaceHolder}
					ref={searchInput}
				/>
				<button
					className='py-2 px-6 bg-red-600 text-white rounded-r-sm'
					onClick={handleGptSearchClick}
				>{
						lang[language].search
					}</button>
			</form>
		</div>
	)
}

export default GPTSearchBar