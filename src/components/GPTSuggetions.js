import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTSuggetions = () => {

	const { tmdbMovieResults, gptMoviesNames } = useSelector(store => store.gpt);

	if (!gptMoviesNames) {
		return <div>No Movies Present</div>
	}

	return (
		<div className='p-4 bg-black text-white m-20 bg-opacity-80'>
			{
				gptMoviesNames.map((movie, index) => {
					return <MovieList title={movie} movies={tmdbMovieResults[index]?.results} key={movie} className="flex flex-wrap" />
				})
				//<MovieList title={gptMoviesNames[0]} movies={tmdbMovieResults[0]?.results} className="flex flex-wrap" />
			}
		</div>
	)
}

export default GPTSuggetions