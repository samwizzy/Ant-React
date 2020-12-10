import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect, useSelector } from 'react-redux'
import * as Actions from './actions'
import moment from 'moment'
import _ from 'lodash'

function About(props) {

  useEffect(() => {
  }, [])

  return (
    <div>
      <h1 className="title">About</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  )
}

function mapStateToProps({ homeReducer }) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About)