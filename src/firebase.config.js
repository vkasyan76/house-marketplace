// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCQy3N53Q7R4Vt4E5k-7xpS14FUGWaYl8s',
    authDomain: 'house-marketplace-app-77263.firebaseapp.com',
    projectId: 'house-marketplace-app-77263',
    storageBucket: 'house-marketplace-app-77263.appspot.com',
    messagingSenderId: '92835327238',
    appId: '1:92835327238:web:988fc04ed9a4cf3aea8287',
    measurementId: 'G-NVD024W5VP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()