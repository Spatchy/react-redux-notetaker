import {db, collection, addDoc} from './firestore'
import bcrypt from 'bcrypt'

const addUser = async (user) => {
  try {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if(err) throw err
      else {
        const docRef = await addDoc(collection(db, "Users"), {
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