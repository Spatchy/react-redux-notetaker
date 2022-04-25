import React from "react"
import { connect } from "react-redux"

// generates rows of 5 notes using colums
const generateRows = (notesArr) => {
  const columns = [[], [], [], [], []]

  notesArr.forEach((note, index) => {
    columns[index % 5].push(
      <article className="notification is-primary" key={index}>
        <p className="title">{note.title}</p>
        <p className="subtitle">{note.body}</p>
      </article>
    )
  })
  columns[notesArr.length % 5].push(
    <article className="notification" key="newBtn">
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


const NotesHome = (props) => {
  return (
    <div>
      <h1 className="title mx-5">Your Notes</h1>
      <div className="columns m-4">
        {generateRows(props.user.notes)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.reducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch({
        type: 'ADD_NOTE',
        payload: note
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesHome)

