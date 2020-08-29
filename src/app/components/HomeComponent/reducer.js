import * as Actions from './actions'

const initialState = {
	users: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_FIREBASE_USERS: {
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