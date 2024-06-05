import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
	name: 'movies',
	initialState: {
		nowPlayingMovies: null,
		trailerViedo: null,
		popularMovies: null,
		topRatedMovies: null,
		upcomingMovies: null
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerViedo = action.payload
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		}
	}
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = MovieSlice.actions;

export default MovieSlice.reducer;