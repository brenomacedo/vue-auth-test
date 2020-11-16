import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBaa-GrcaqnV9Uj9kzRLeyoqte-poFeFzc",
    authDomain: "vue-status-media.firebaseapp.com",
    databaseURL: "https://vue-status-media.firebaseio.com",
    projectId: "vue-status-media",
    storageBucket: "vue-status-media.appspot.com",
    messagingSenderId: "607453783507",
    appId: "1:607453783507:web:c8b8d9c300ce8594f2fb26"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()
const users = database.collection('users')

export const findOrCreateUser = async (user) => {

    const { id, name, email, avatar } = user

    const User = await users.where('email', '==', email).get()
    
    if(!User.empty) {
        return
    }

    await users.doc(email).set({
        id, name, email, avatar
    })

}

export const findUser = async (email) => {

    const user = await users.where('email', '==', email).get()
    console.log(user)
    if(user.empty) {
        throw 'error'
    }

    return user.data()

}

export const createUser = async (user) => {

    const { id, name, email } = user

    try {
        await users.doc(email).set({
            id, name, email, avatar: 'https://firebasestorage.googleapis.com/v0/b/vue-status-media.appspot.com/o/pic.png?alt=media&token=1cf39ea2-eb9f-494a-8714-51fc6f905de4'
        })
    } catch {
        throw 'Error'
    }
}

export default firebase