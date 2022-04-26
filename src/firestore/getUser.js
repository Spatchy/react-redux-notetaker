import {db, doc, getDoc} from './firestore'
import bcrypt from 'bcryptjs'

const getUser = async (email, password) => {
  try {
    // this isn't secure as notes are brought client side before password is checked but the db is public anyway
    const q = doc(db, "Users", email)
    const querySnapshot = await getDoc(q)
    if(querySnapshot.exists()) {
      const userData = querySnapshot.data()
      if(await bcrypt.compare(password, userData.password)) {
        return userData
      } else {
        return new Error("Your password is incorrect")
      }
    } else {
      return new Error("That email is not registered")
    }
  } catch (e) {
    console.error(e)
    return new Error("An error occured while trying to connect to the database")
  }
}

export default getUser