import React, { useEffect, useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearchPage from './GPTSearchPage';

const Browse = () => {

	const showGptSearch = useSelector(store => store.gpt.showGptSearch)

	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();

	return (

		/**
		 * Main container
		 *   - Video Background
		 *   - Video Title
		 * Secondary Container
		 * 	- MovieList * n 
		 * 		- MovieCard * n
		 */
		<div className='bg-black'>
			<Header />
			{showGptSearch ?
				<GPTSearchPage />
				: (
					<>
						<MainContainer />
						<SecondaryContainer />
					</>
				)
			}
		</div>
	)
}

export default Browse