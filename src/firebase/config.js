import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAhSJAgNdBAh66igZvcOycIfEVay-t8W6s",
    authDomain: "simple-contact-form-f6c82.firebaseapp.com",
    projectId: "simple-contact-form-f6c82",
    storageBucket: "simple-contact-form-f6c82.appspot.com",
    messagingSenderId: "996182610600",
    appId: "1:996182610600:web:7e27a3bf4c086935eba89d"
  };

  // init firebase app
  firebase.initializeApp(firebaseConfig)

  // init firestore
  const projectFirestore = firebase.firestore()

  export { projectFirestore }