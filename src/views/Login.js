import React from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    if(email === "test@example.com" && password === "password") {
      const user = {
        name: "Test User",
        email: email,
        isAuthenticated: true,
        notes: [
          {
            id: 1,
            title: "Test Note 1",
            body: "This is a test note"
          },
        ]
      }
      props.setUser(user)
      navigate("/")
    }
  }

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
              <form onSubmit={handleSubmit}>
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
                <div className="field has-addons has-addons-centered">
                  <p className="control">
                    <button className="button" type="submit">
                      Login
                    </button>
                  </p>
                </div>
              </form>
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

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch({
        type: 'SET_USER',
        payload: user
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)