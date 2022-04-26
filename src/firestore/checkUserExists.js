import {db, doc, getDoc} from './firestore'

const checkUserExists = async (email) => {
  try {
    // this isn't secure as notes are brought client side before password is checked but the db is public anyway
    const q = doc(db, "Users", email)
    const querySnapshot = await getDoc(q)
    if(querySnapshot.exists()) {
      return true      
    } else {
      return false
    }
  } catch (e) {
    console.error(e)
    return new Error("An error occured while trying to connect to the database")
  }
}

export default checkUserExists