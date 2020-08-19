import {
  // all,
  // put, 
  // call, 
  // take, 
  // takeLatest, 
  takeEvery
} from 'redux-saga/effects'
import { GET_USERS } from './actions'

function* getUsers() {
  try {
    const response = yield fetch('http://localhost:3000/todos').then(response => response.json())
    // console.log("i am balling in the get users function")
    console.log(response, "response")

  } catch (err) {

  }
}

export default function* rootSaga() {
  yield takeEvery(GET_USERS, getUsers)
}