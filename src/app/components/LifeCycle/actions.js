import _ from 'lodash'
import firebaseService from '../../services/firebase'

export const GET_CYCLE = 'CYCLE_COMPONENTS/GET CYCLE';
export const GET_FIRE_USERS = 'CYCLE_COMPONENTS/GET FIRE USERS';

export function getCycles() {
	const getAll = new Promise((resolve, reject) => {
		const data = [{ name: 'samuel', email: 'samwizzy98@gmail.com', skill: 'development' }]
		return resolve(data)
	})

	return (dispatch) => {
		getAll.then((data) => {
			console.log(data, "promise")
			return dispatch({
				type: GET_CYCLE,
				payload: data
			})
		})
	}
}

export function getUsers() {

	return (dispatch) => {
		firebaseService.getUsers()
			.then((data) => {
				console.log(data, "promise get users")
				const users = _.values(data)

				return dispatch({
					type: GET_FIRE_USERS,
					payload: users
				})
			})
	}
}