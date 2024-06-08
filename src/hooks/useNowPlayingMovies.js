import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux';


const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)



	const getNowPlayingMovies = async () => {
		const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
		const data = await res.json();
		console.log(data);
		dispatch(addNowPlayingMovies(data?.results || []))
	}

	useEffect(() => {
		!nowPlayingMovies && getNowPlayingMovies();
	}, [])
}

export default useNowPlayingMovies;