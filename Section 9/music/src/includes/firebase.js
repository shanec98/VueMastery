import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDER_5YLKBBiXsfiLY2M8rlUTBTip0gzdA',
  authDomain: 'music-ebcad.firebaseapp.com',
  projectId: 'music-ebcad',
  storageBucket: 'music-ebcad.appspot.com',
  appId: '1:650246664502:web:fcca6834d5a5a595a04397'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
