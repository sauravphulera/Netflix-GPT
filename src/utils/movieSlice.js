import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
	name: 'movies',
	initialState: {
		nowPlayingMovies: null,
		trailerViedo: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerViedo = action.payload
		}
	}
})

export const { addNowPlayingMovies, addTrailerVideo } = MovieSlice.actions;

export default MovieSlice.reducer;