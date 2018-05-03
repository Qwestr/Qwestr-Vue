import Firebase from 'firebase'
import firebaseConfig from '../../config/firebase/config'
import store from '@/store'

const firebaseApp = Firebase.initializeApp(firebaseConfig)

const db = firebaseApp.database()

const userQwestsRef = () => {
  return db.ref('users/' + store.getters['user'].uid + '/qwests')
}

export {
  db,
  userQwestsRef
}
