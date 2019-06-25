import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, CLEAR_ERRORS } from '../types';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		loading: true,
		runner: null,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Register Runner
	const register = async formData => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/api/runners', formData, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				loading: state.loadng,
				runner: state.runner,
				error: state.error,
				register,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
