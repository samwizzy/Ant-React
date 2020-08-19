import * as Actions from './actions'

const initialState = {
	cycles: [],
	users: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_CYCLE: {
			return {
				...state,
				cycles: action.payload
			}
		}
		case Actions.GET_FIRE_USERS: {
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