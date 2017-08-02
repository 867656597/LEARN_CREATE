import * as ActionTypes from './ActionTypes';

export const increment = (countCaption)=>{
	return {
		type: ActionTypes.INCREMENT,
		countCaption: countCaption
	}
}

export const decrement = (countCaption)=>{
	return {
		type: ActionTypes.DECREMENT,
		countCaption: countCaption
	}
}