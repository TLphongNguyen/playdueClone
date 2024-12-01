import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: null,
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
			state.isLoggedIn = true;
		},
		logout: (state) => {
			state.userInfo = null;
			state.isLoggedIn = false;
		},
		updateUserInfo: (state, action) => {
			state.userInfo = {
				...state.userInfo,
				...action.payload,
			};
		},
	},
});

export const { setUserInfo, logout, updateUserInfo } = userSlice.actions;
export default userSlice.reducer;
