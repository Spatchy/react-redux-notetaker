import {db, collection, getDocs, query, where} from './firestore'
import bcrypt from 'bcryptjs'

const getUser = async (email, password) => {
  try {
    // this isn't secure as notes are brought client side before password is checked but the db is public anyway
    const q = query(collection(db, "Users"), where("email", "==", email))
    const querySnapshot = await getDocs(q)
    if(bcrypt.compareSync(password, querySnapshot.docs[0].data().password)) {
      return querySnapshot.docs[0].data()
    } else {
      return new Error("Incorrect password")
    }
  } catch (e) {
    return new Error("User not found")
  }
}

export default getUser