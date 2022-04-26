import {db, doc, setDoc} from './firestore'
import bcrypt from 'bcryptjs'
import checkUserExists from './checkUserExists'

const addUser = async (user) => {
  try {
    if(checkUserExists(user.email)) { // check if user already exists
      return new Error("That email is already registered")
    } else {
      bcrypt.hash(user.password, 10, async (err, hash) => {
        if(err) throw err
        else {
          const docRef = await setDoc(doc(db, "Users", user.email), {
            name: user.name,
            email: user.email,
            notes: [
              {
                id: 1, 
                title: "Welcome " + user.name, 
                body: "Click me to edit!"
              },
              {
                id: 2, 
                title: "Delete Me", 
                body: "Delete notes by clicking the x button"
              },
              {
                id: 3, 
                title: "Don't Forget to Save!", 
                body: "Save your changes by clicking the save button on the navebar at the top"
              }
            ],
            password: hash //salt is included in hash using bcrypt
          })
          console.log("Document written with ID: ", docRef.id)
        }
      })
    }
    } catch (e) {
      return new Error("An error occured while trying to connect to the database")
    }
}

export default addUser