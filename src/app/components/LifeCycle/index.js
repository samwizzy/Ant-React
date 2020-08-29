import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'
import firebaseService from './../../services/firebase'
import firebase from 'firebase/app'
import 'firebase/database'
import _ from 'lodash'

class LifeCycle extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.props.getCycles()
    this.props.getUsers()

    // firebase.database().ref().child('users')
    //   .on('value', snapshot => {
    //     const users = _.values(snapshot.val())
    //     this.setState({ users })
    //   })
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.cycles !== this.props.cycles) {
      console.log("i just got mounted on updates")
    }
  }

  render() {
    const { users } = this.state
    console.log(users, "state users gotten")

    return (
      <div>
        <div class="columns">
          <div class="column">
            <h1 className="title">LifeCycle</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
            <ul>
              {this.props.cycles.map((cycle, i) =>
                <li key={i}>{cycle.email}</li>
              )}
            </ul>
          </div>


          <div className="column">
            <nav className="panel">
              <p className="panel-heading">Repositories</p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="Search" />
                  <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
              <p className="panel-tabs">
                <a href="/#" className="is-active">All</a>
                <a href="/#">Public</a>
                <a href="/#">Private</a>
                <a href="/#">Sources</a>
                <a href="/#">Forks</a>
              </p>
              {users && users.map((user, i) =>
                <a key={i} href="/#" className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                  {user.email}
                </a>
              )}
              <label className="panel-block">
                <input type="checkbox" />
                remember me
              </label>
              <div className="panel-block">
                <button className="button is-link is-outlined is-fullwidth">
                  Reset all filters
                </button>
              </div>
            </nav>
          </div>

        </div>
      </div>
    )

  }
}

const mapStateToProps = ({ lifecycleReducer }) => {
  console.log(lifecycleReducer, 'state cycle')
  return {
    cycles: lifecycleReducer.cycles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCycles: Actions.getCycles,
    getUsers: Actions.getUsers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeCycle)