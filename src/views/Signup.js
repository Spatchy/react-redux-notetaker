import React from "react"

const Signup = () => {
  return (
    <div className="hero is-fullheight-with-navbar is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            Sign Up
          </h1>
          <h2 className="subtitle has-text-centered">
            Enter your details below
          </h2>
          {/* a sign-up form with email, password and confirm password fields */}
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
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="password" placeholder="Confirm Password" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field has-addons has-addons-centered">
                <p className="control">
                  <button className="button">
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="has-text-centered">
                <p>Already have an account?</p>
                <p>
                  <a href="/login" className="is-underlined">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup