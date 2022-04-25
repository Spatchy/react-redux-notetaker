import React from "react"
import { connect } from "react-redux"

const NoteModal = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target.title.value
    const body = event.target.body.value
    if(title === "" || body === "") {
      alert("Please fill out all fields")
    } else {
      const noteData = {
        id: props.modal.id,
        title: title,
        body: body
      }
      if(props.modal.isEditing) {
        console.log(noteData)
        props.editNote(noteData)
      } else {
        props.addNote(noteData)
      }
      props.closeModal()
    }
  }

  return (
    <div className={`modal ${props.modal.isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={props.closeModal}></div>
      <div className="modal-content">
        <div className="box">
          <form onSubmit={handleSubmit} key={props.modal.title}>
            <div className="field">
              <p className="control">
                <input className="input is-large" type="text" name="title" placeholder="Title" defaultValue={props.modal.title}/>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <textarea className="textarea is-large"  name="body" placeholder="Write your note" defaultValue={props.modal.body}/>
              </p>
            </div>
            <div className="field has-addons has-addons-right">
              <p className="control">
                <button className="button is-large is-success" type="submit">
                  {props.modal.title ? "Update" : "Create"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={props.closeModal}></button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    modal: state.reducer.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      console.log("adding new note")
      dispatch({
        type: 'ADD_NOTE',
        payload: note
      })
    },
    editNote: (note) => {
      console.log("editing note")
      dispatch({
        type: 'UPDATE_NOTE',
        payload: note
      })
    },
    closeModal: () => {
      dispatch({
        type: 'CLOSE_MODAL'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal)