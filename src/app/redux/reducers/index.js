import { combineReducers } from 'redux'
import UserReducer from '../../components/UsersComponent/reducer'
import LifeCycleReducer from '../../components/LifeCycle/reducer'

const reducer = combineReducers({
	users: UserReducer,
	lifecycleReducer: LifeCycleReducer,
})

export default reducer