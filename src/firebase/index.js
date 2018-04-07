import Firebase from 'firebase'
import firebaseConfig from '../../config/firebase/config'

const firebaseApp = Firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.database()
