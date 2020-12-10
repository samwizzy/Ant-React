import _ from 'lodash'

export const GET_ABOUT_DATA = 'ABOUT_COMPONENTS/GET_ABOUT_DATA';

export function getAboutData(data) {

	return (dispatch) => {
		return dispatch({
			type: GET_ABOUT_DATA,
			payload: data
		})
	}
}