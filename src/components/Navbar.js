import React from "react"
import { connect } from "react-redux"
import saveNotes from "../firestore/saveNotes"
import logo from "../logo.svg"

const Navbar = (props) => {

  const save = () => {
    const attempt = saveNotes(props.user.email, props.user.notes)
    if(attempt instanceof Error) {
      props.setError(attempt.message)
    }
  }

  const logout = () => {
    props.logOut()
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://github.com/Spatchy/react-redux-notetaker">
          <img src={logo} width="40" height="40" alt=""></img>
        </a>
      </div>

      <div className="navbar-menu">

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {props.user.isAuthenticated ? (
                <>
                  <button className="button is-primary" onClick={() => {save()}}>
                    <strong>Save Changes</strong>
                  </button>
                  <button className="button is-danger" onClick={() => {logout()}}>
                    Log Out
                  </button>
                </>
              ) : (
                <>  
                  <a className="button is-primary" href="/signup">
                    <strong>Sign Up</strong>
                  </a>
                  <a className="button is-light" href="/login">
                    Log in
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setError: (error) => {
      dispatch({
        type: "SET_ERROR",
        payload: error
      })
    },
    logOut: () => {
      dispatch({
        type: "LOGOUT"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)