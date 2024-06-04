import React, { useEffect, useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

	useNowPlayingMovies();

	return (

		/**
		 * Main container
		 *   - Video Background
		 *   - Video Title
		 * Secondary Container
		 * 	- MovieList * n 
		 * 		- MovieCard * n
		 */
		<div className=''>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	)
}

export default Browse