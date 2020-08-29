import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import firebaseService from '../../services/firebase'
import * as Actions from './actions'

function Home(props) {
  const [state, setState] = React.useState('chukwubunna')

  React.useEffect(() => {
    props.getUsers()
    props.getFirebaseUsers()
  }, [])

  // React.useEffect(() => {
  //   getAsync().then(response => setState(response))
  // }, [state])

  const getAsync = () => {
    const request = new Promise(function (resolve, reject) {
      return setTimeout(() => resolve("Hello World"), 10000)
    });
    return request;
  }

  console.log("I am a use effect", state)

  return (
    <div>
      <h1 className="title">Home</h1>
      <h3 className="title">{state}</h3>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  )
}

function mapStateToProps({ homeReducer }) {
  console.log(homeReducer, "homeReducer")
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsers: Actions.getUsers,
    getFirebaseUsers: Actions.getFirebaseUsers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)