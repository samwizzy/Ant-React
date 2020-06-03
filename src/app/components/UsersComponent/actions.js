export const GET_USERS = 'USERS_COMPONENTS/GET USERS';
export const GET_USER  = 'USERS_COMPONENTS/GET USER';
export const ADD_USER  = 'USERS_COMPONENTS/ADD USER';

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