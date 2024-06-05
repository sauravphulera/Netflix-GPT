import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
	return (
		<div className='pb-5 p-2'>
			<div className='text-2xl font-medium py-2 text-white'>{title}</div>
			<div className='flex overflow-x-scroll p overflow-y-visible'>
				<div className='flex gap-[5px] overflow-visible'>
					{
						movies?.map((movie) => {

							return (<MovieCard posterUrl={movie?.poster_path} key={movie.id} />)
						})
					}
				</div>
			</div>

		</div>
	)
}

export default MovieList