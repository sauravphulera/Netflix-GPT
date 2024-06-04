import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';


const useTrailerVideo = (movieId) => {
	const dispatch = useDispatch();

	const getMovieClips = async () => {
		const res = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
		const data = await res.json();
		console.log(data);

		const allTrailers = data?.results.filter((video) => {
			return video.type === 'Trailer'
		})

		const trailer = allTrailers.length === 0 ? allTrailers[0] : data?.results?.[0];
		console.log(trailer)
		dispatch(addTrailerVideo(trailer));
	}

	useEffect(() => {
		getMovieClips();
	}, [])
}

export default useTrailerVideo