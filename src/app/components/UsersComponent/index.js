import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import { Button } from 'react-bulma-components';

function Users({ match, getUsers, checkUser }) {

	useEffect(() => {
	}, [])

	return (
		<div>
			<h1 className="title">Users</h1>
			<h2 className="subtitle">
				A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
			</h2>
			<Button color="primary" onClick={getUsers}>Get User</Button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {}
}
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		getUsers: Actions.getUsers,
		checkUser: Actions.checkUser
	}, dispatch)
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Users)