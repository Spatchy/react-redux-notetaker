import {db, doc, getDoc, setDoc} from './firestore'

const saveNotes = async (email, notesArr) => {
  try {
    const q = doc(db, "Users", email)
    const querySnapshot = await getDoc(q)
    if(querySnapshot.exists()) {
      const userData = querySnapshot.data()
      userData.notes = notesArr
      await setDoc(q, userData)
    } else {
      return new Error("That email is not registered")
    }
  } catch (e) {
    console.error(e)
    return new Error("An error occured while trying to connect to the database")
  }
}

export default saveNotes