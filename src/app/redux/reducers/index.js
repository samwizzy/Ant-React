import { combineReducers } from 'redux'
import HomeReducer from '../../components/HomeComponent/reducer'
import UserReducer from '../../components/UsersComponent/reducer'
import LifeCycleReducer from '../../components/LifeCycle/reducer'

const reducer = combineReducers({
	homeReducer: HomeReducer,
	users: UserReducer,
	lifecycleReducer: LifeCycleReducer,
})

export default reducer