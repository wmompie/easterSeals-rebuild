import { ADD_RUNNER } from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_RUNNER:
			return {
				...state,
				runners: [...state.runners, action.payload],
			};
		default:
			return state;
	}
};
