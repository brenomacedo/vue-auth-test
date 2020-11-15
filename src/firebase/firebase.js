import firebase from 'firebase/app'
import 'firebase/auth'

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

export default firebase