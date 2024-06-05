import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice'
import { useDispatch } from 'react-redux';


const usePopularMovies = () => {
	const dispatch = useDispatch();

	const getPopularMovies = async () => {
		const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
		const data = await res.json();
		console.log(data);
		dispatch(addPopularMovies(data?.results || []))
	}

	useEffect(() => {
		getPopularMovies();
	}, [])
}

export default usePopularMovies;