import React, { Fragment, Component } from 'react'
import firebaseService from '../services/firebase'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.firebaseAuth()
    }

    firebaseAuth() {
        firebaseService.init()
        firebaseService.signIn("samwize.inc@gmail.com", "chukwubunna88")
    }

    render() {
        const { children } = this.props

        return (
            <Fragment>
                {children}
            </Fragment>
        )
    }
}

export default Auth 