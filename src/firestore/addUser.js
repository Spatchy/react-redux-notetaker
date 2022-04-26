import {db, doc, setDoc} from './firestore'
import bcrypt from 'bcryptjs'

const addUser = async (user) => {
  try {
    bcrypt.hash(user.password, 10, async (err, hash) => {
      if(err) throw err
      else {
        const docRef = await setDoc(doc(db, "Users", user.email), {
          name: user.name,
          email: user.email,
          notes: [
            {
              id: 1, 
              title: "Example Item", 
              body: "Click me to edit!"
            }
          ],
          password: hash //salt is included in hash using bcrypt
        })
        console.log("Document written with ID: ", docRef.id)
      }
    })
    } catch (e) {
      console.error("Error adding document: ", e)
    }
}

export default addUser