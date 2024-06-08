import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constants'

const MovieCard = ({ posterUrl }) => {
	return (
		<div className='w-[200px] h-[300px] cursor-pointer pr-2'>
			<img className='w-[200px] h-full' alt='movie' src={MOVIE_POSTER_URL + posterUrl} />
		</div>
	)
}

export default MovieCard