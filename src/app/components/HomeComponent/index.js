import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux'
import * as Actions from './actions'
import moment from 'moment'
import _ from 'lodash'

function Home(props) {

  const selectors = useSelector(state => state.homeReducer)

  const { users } = props
  const [state, setState] = useState('chukwubunna')

  useEffect(() => {
    props.getFirebaseUsers()
  }, [])

  useEffect(() => {
    getAsync().then(response => setState(response))
  }, [state])

  const getAsync = () => {
    const request = new Promise(function (resolve, reject) {
      return setTimeout(() => resolve("Hello World"), 10000)
    });
    return request;
  }

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
  return {
    users: homeReducer.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFirebaseUsers: Actions.getFirebaseUsers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)