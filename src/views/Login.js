import React from "react"

const Landing = () => {
  return (
    <div className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            Welcome to the Note App
          </h1>
          <h2 className="subtitle has-text-centered">
            A simple note app built with React and Redux
          </h2>
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field has-addons has-addons-centered">
                <p className="control">
                  <button className="button">
                    Login
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="has-text-centered">
            <p>Don't have an account?</p>
            <p>
              <a href="/signup" className="is-underlined">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing