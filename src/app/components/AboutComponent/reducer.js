import * as Actions from './actions'

const initialState = {
	data: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_ABOUT_DATA: {
			return {
				...state,
				data: action.payload
			}
		}
		default:
			return state
	}
}

export default reducer