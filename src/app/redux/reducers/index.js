import { combineReducers } from 'redux'
import UserReducer from '../../components/UsersComponent/reducer'

const reducer = combineReducers({
	users: UserReducer 
})

export default reducer