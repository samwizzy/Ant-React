import {ADD_USER, GET_USERS, GET_USER} from './actions'

const initialState = {
	users: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_USERS: {
			return {
				...state, 
				users: [{id: 1, name: 'sam'}]		
			}
		}
		case GET_USER: {
			return {
				...state		
			}
		}
		case ADD_USER: {
			return {
				...state,
				users: action.payload		
			}
		}
		default: 
			return state
	}
}

export default reducer