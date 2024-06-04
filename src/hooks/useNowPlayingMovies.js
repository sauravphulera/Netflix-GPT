import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useDispatch } from 'react-redux';


const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
		const data = await res.json();
		console.log(data);
		dispatch(addNowPlayingMovies(data?.results || []))
	}

	useEffect(() => {
		getNowPlayingMovies();
	}, [])
}

export default useNowPlayingMovies;