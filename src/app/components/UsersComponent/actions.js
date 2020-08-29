export const GET_TODOS = 'USERS_COMPONENTS/GET TODOS';
export const GET_USERS = 'USERS_COMPONENTS/GET USERS';
export const GET_USER = 'USERS_COMPONENTS/GET USER';
export const ADD_USER = 'USERS_COMPONENTS/ADD USER';
export const CHECK_USER = 'USERS_COMPONENTS/CHECK USER';

export function getUsers() {
	return {
		type: GET_USERS
	}
}

export function addUser(payload) {
	return {
		type: ADD_USER,
		payload
	}
}

export function checkUser() {
	const getAll = new Promise((resolve, reject) => {
		const data = { name: 'samuel', email: 'samwizzy98@gmail.com', skill: 'development' }
		return resolve(data)
	})

	return (dispatch) => {
		getAll.then((data) => {
			console.log(data)
			return dispatch({
				type: CHECK_USER,
				payload: data
			})
		})
	}

}