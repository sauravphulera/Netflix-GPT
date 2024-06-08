export const USER_AVATAR = 'https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb7kuX9mKPrFGfvZ0oJ9eMBbFCB7ZhumT7uHIoILp1FtGpeIhybv8zoGgNK76rr7N8bMdhn-kkbRnD6ut8mFLwqYXmdpwCw.png?r=eea'

export const API_OPTIONS = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWQzNDI5MGU5MDg0MTNhZGMwMDI0ZDJhZTg1YjI3NCIsInN1YiI6IjY2NWY0OWE0ZWY0OTBmNWY5ZGMyNzcyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jyk7VltA9jszLpCw_27GpQAB9OkFeluCDPEbYaRrZP8',
	}
}

export const MOVIE_POSTER_URL = 'https://image.tmdb.org/t/p/original/';

export const SUPPORTED_LANGUAGES = [
	{
		key: 'en',
		name: 'English'
	},
	{
		key: 'hindi',
		name: 'Hindi'
	},
	{
		key: 'spanish',
		name: 'Spansih'
	}
]

export const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query='