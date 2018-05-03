import Firebase from 'firebase'
import firebaseConfig from '../../config/firebase/config'
import store from '@/store'

const db = Firebase.initializeApp(firebaseConfig).database()

const userQwestsRef = () => {
  return db.ref('users/' + store.getters['user'].uid + '/qwests')
}

export {
  userQwestsRef
}
