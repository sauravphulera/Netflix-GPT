import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: 'gpt',
	initialState: {
		showGptSearch: false,
		tmdbMovieResults: null,
		gptMoviesNames: null,
	},
	reducers: {
		toggleGptSearchView: (state, action) => {
			state.showGptSearch = !state.showGptSearch
		},
		addGptMovieResult: (state, action) => {

			const { movieNames, movieResults } = action.payload;

			state.tmdbMovieResults = movieResults
			state.gptMoviesNames = movieNames
		}
	}
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer