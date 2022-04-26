import React from "react"
import addUser from "../firestore/addUser"
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"

const Signup = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    if(password === confirmPassword) {
      const user = {
        name: name,
        email: email,
        password: password
      }
      addUser(user)
      navigate("/login")
    } else {
      props.setError("Passwords do not match")
    }
  }

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
              <form onSubmit={handleSubmit}>
              <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="text" name="name" placeholder="Name" />
                    <span className="icon is-small is-left">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" name="email" placeholder="Email" />
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
                    <input className="input" type="password" name="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="password" name="confirmPassword" placeholder="Confirm Password" />
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
                    <button className="button" type="submit">
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setError: (errorMsg) => {
      dispatch({
        type: 'SET_ERROR',
        payload: errorMsg
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)