import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constants'

const MovieCard = ({ posterUrl }) => {
	return (
		<div className='w-[200px] cursor-pointer'>
			<img className='w-[200px]' alt='movie' src={MOVIE_POSTER_URL + posterUrl} />
		</div>
	)
}

export default MovieCard