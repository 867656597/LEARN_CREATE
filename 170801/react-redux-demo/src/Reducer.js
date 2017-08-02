import * as ActionTypes from './ActionTypes';

export default (state,action) => {
	const { countCaption } = action;
	console.log(countCaption)
	switch (action.type) {
		case ActionTypes.INCREMENT:
			return {...state,[countCaption] : state[countCaption] + 1}
		case ActionTypes.DECREMENT:
			return {...state,[countCaption] : state[countCaption] - 1}
		default:
			return state
	}
}