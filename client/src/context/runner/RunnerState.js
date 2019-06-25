import React, { useReducer } from 'react';
import uuid from 'uuid';
import RunnerContext from './runnerContext';
import runnerReducer from './runnerReducer';
import { ADD_RUNNER } from '../types';

const RunnerState = props => {
	const initialState = {
		runners: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@gmail.com',
				address: '1234 Main Street',
				city: 'Miami',
				state: 'FL',
				postal: '31314',
				phone: '222-222-2222',
				distance: '5K',
			},
			{
				id: 2,
				name: 'Jill Johnson',
				email: 'jill@gmail.com',
				address: '1234 Main Corner',
				city: 'Boston',
				state: 'MA',
				postal: '53523',
				phone: '343-545-3434',
				distance: '1 Mile',
			},
			{
				id: 3,
				name: 'Sara Watson',
				email: 'sara@gmail.com',
				address: '1 Main Way',
				city: 'New York',
				state: 'NY',
				postal: '12001',
				phone: '212-212-3322',
				distance: '10K',
			},
		],
	};

	const [state, dispatch] = useReducer(runnerReducer, initialState);

	// Add Runner
	const addRunner = runner => {
		runner.id = uuid.v4();
		dispatch({ type: ADD_RUNNER, payload: runner });
	};

	return (
		<RunnerContext.Provider
			value={{
				runners: state.runners,
				addRunner,
			}}
		>
			{props.children}
		</RunnerContext.Provider>
	);
};

export default RunnerState;
