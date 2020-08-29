import _ from 'lodash'
import firebase from 'firebase/app'
import 'firebase/database'

export const GET_FIREBASE_USERS = 'HOME_COMPONENTS/GET FIREBASE USERS';

export function getFirebaseUsers() {

	return (dispatch) => {
		firebase.database().ref().child('users')
			.on('value', snapshot => {
				const users = _.values(snapshot.val())
				return dispatch({
					type: GET_FIREBASE_USERS,
					payload: users
				})
			})
	}
}