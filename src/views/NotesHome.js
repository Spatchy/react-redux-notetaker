import React from "react"

const testNotesArr = [
  {
    title: "Note 1",
    body: "This is the body of note 1"
  },
  {
    title: "Note 2",
    body: "This is the body of note 2"
  },
  {
    title: "Note 3",
    body: "This is the body of note 3"
  },
  {
    title: "Note 4",
    body: "This is the body of note 4"
  },
  {
    title: "Note 5",
    body: "This is the body of note 5"
  },
  {
    title: "Note 6",
    body: "This is the body of note 6"
  }
]

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


const NotesHome = () => {
  return (
    <div>
      <h1 className="title mx-5">Your Notes</h1>
      <div className="columns m-4">
        {generateRows(testNotesArr)}
      </div>
    </div>
  )
}

export default NotesHome

