import React from "react"
import { connect } from "react-redux"

const ErrorModal = (props) => {
  return (
    <div className={`modal ${props.error.isError ? "is-active" : ""}`}>
      <div className="modal-background" onClick={props.acknowledgeError}></div>
      <div className="modal-content">
        <div className="notification is-danger">
          <h1 className="title">Error</h1>
          <p>{props.error.errorMessage}</p>
          <div className="buttons is-right">
            <button className="button is-large is-light is-outlined" onClick={props.acknowledgeError}>
              Okay
            </button>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={props.acknowledgeError}></button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.reducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    acknowledgeError: () => {
      dispatch({
        type: 'ACKNOWLEDGE_ERROR'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal)