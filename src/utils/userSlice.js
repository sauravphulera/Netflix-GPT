import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: 'user',
	initialState: null,
	reducers: {
		addUser: (action, payload) => {
			return payload;
		},
		removeUser: (action, payload) => {
			return null;
		}
	}
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;