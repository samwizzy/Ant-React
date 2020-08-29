import {
  // all,
  // put, 
  // call, 
  // take, 
  // takeLatest, 
  takeEvery
} from 'redux-saga/effects'
import { GET_USERS, GET_TODOS } from './actions'

function* getUsers() {
  try {
    const response = yield fetch('http://localhost:3000/todos').then(response => response.json())
    // console.log("i am balling in the get users function")
    console.log(response, "response")

  } catch (err) {

  }
}

function* getTodos() {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
    // console.log("i am balling in the get users function")
    console.log(response, "response")

  } catch (err) {

  }
}

export default function* rootSaga() {
  yield takeEvery(GET_USERS, getUsers)
  yield takeEvery(GET_TODOS, getTodos)
}