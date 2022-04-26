import {db, doc, getDoc} from './firestore'

const checkUserExists = async (email) => {
  try {
    const q = doc(db, "Users", email)
    const querySnapshot = await getDoc(q)
    if(querySnapshot.exists()) {
      return true      
    } else {
      return false
    }
  } catch (e) {
    console.error(e)
    throw new Error("An error occured while trying to connect to the database")
  }
}

export default checkUserExists