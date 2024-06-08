import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

	const movies = useSelector(store => store.movies);
	if (!movies.nowPlayingMovies) return;
	console.log(movies)
	/**
	 * Popular
	 * Now Playing
	 * Trending
	 * 
	 */
	return (
		<div className='bg-transparent mt-[-80px] z-50 relative px-16 xl:mt-[-180px] 2xl:mt-[-300px]'>
			<MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
			<MovieList title={"Trending"} movies={movies?.popularMovies} />
			<MovieList title={"Popular Today"} movies={movies?.topRatedMovies} />
			<MovieList title={"Top Rated Movies"} movies={movies?.upcomingMovies} />
		</div>
	)
}

export default SecondaryContainer