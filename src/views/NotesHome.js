import React from "react"
import { connect } from "react-redux"
import NoteModal from "../components/NoteModal"
import { Navigate } from "react-router-dom"


const NotesHome = (props) => {

  if(!props.user.isAuthenticated) { // protect the route
    return <Navigate to="/login" />
  }

  const generateRows = () => {
    const notesArr = props.user.notes
  
    const columns = [[], [], [], [], []]
  
    notesArr.forEach((note, index) => {
      columns[index % 5].push(
        <article className="notification is-primary" key={index} onClick={() => editNote(note.id, note.title, note.body)} style={{height:"15em"}}>
          <button className="delete is-large" onClick={(event) => {event.stopPropagation(); removeNote(note.id)}}></button>
          <p className="title">{note.title}</p>
          <p className="subtitle">{note.body}</p>
        </article>
      )
    })
    columns[notesArr.length % 5].push(
      <article className="notification" key="newBtn" onClick={() => {newNote(notesArr.length > 0 ? notesArr[notesArr.length-1].id+1 : 1)}} style={{height:"15em"}}>
        <p className="title">+ New Note</p>
        <p className="subtitle">Click to add...</p>
      </article>
    )
    return (
      columns.map((columnData, index) => {
        return (
          <div className="column" key={"col-" + index}>
            {columnData}
          </div>
        )
      })
    )
  }
  
  const newNote = (id) => {
    props.openModal(id, "", "", false)
  }

  const editNote = (id, title, body) => {
    props.openModal(id, title, body, true)
  }
  
  const removeNote = (id) => {
    console.log("delete placeholder " + id)
    props.deleteNote(id)
  }

  return (
    <div>
      <h1 className="title mx-5">Your Notes</h1>
      <div className="columns m-4">
        {generateRows()}
        <NoteModal />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.reducer.user,
    modal: state.reducer.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => {
      dispatch({
        type: 'DELETE_NOTE',
        payload: id
      })
    },
    openModal: (id, title, body, isEditing) => {
      dispatch({
        type: 'OPEN_MODAL',
        payload: {
          id: id,
          title: title,
          body: body,
          isEditing: isEditing
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesHome)

