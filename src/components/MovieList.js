import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
	const scrollRef = useRef(null);
	//const scroll = (direction) => {
	//	console.log(scrollRef.current)
	//	if (scrollRef.current) {
	//		const { scrollLeft, clientWidth } = scrollRef.current;
	//		console.log(clientWidth, scrollLeft)
	//		const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
	//		scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
	//	}
	//};
	return (
		<div className='pb-5 p-2'>
			<div className='text-2xl font-medium py-2 text-white'>{title}</div>
			<div className='flex overflow-x-scroll p overflow-y-visible'>
				<div className='flex gap-[5px] overflow-visible' ref={scrollRef}>
					{
						movies?.map((movie) => {

							if (movie?.poster_path) {
								return (<MovieCard posterUrl={movie?.poster_path} key={movie.id} />)
							}
							return null;
						})
					}
				</div>
			</div>

		</div>
	)
}

export default MovieList