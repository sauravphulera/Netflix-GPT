import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo, } from '../utils/movieSlice';


const useTrailerVideo = (movieId) => {
	const dispatch = useDispatch();

	const trailerVideo = useSelector(store => store.movies.trailerViedo)


	const getMovieClips = async () => {
		const res = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
		const data = await res.json();

		const allTrailers = data?.results.filter((video) => {
			return video.type === 'Trailer'
		})

		const trailer = allTrailers.length === 0 ? allTrailers[0] : data?.results?.[0];
		dispatch(addTrailerVideo(trailer));
	}

	useEffect(() => {
		!trailerVideo && getMovieClips();
	}, [])
}

export default useTrailerVideo