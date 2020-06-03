import React from 'react'

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28" />
        </a>

        <a href="/" role="button" className="navbar-burger burger" aria-label="menu" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/users">
            Users
          </a>

          <a className="navbar-item" href="/todos">
            Todos
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/">
                About
              </a>
              <a className="navbar-item" href="/">
                Jobs
              </a>
              <a className="navbar-item" href="/">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header