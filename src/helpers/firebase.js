import Vue from 'vue'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: 'AIzaSyCrMK_WLmE2e_b5whRc70jhK0_bHNz48yM',
  authDomain: 'loginexample-e51b4.firebaseapp.com',
  databaseURL: 'https://loginexample-e51b4.firebaseio.com',
  projectId: 'loginexample-e51b4',
  storageBucket: 'loginexample-e51b4.appspot.com',
  messagingSenderId: '1034499329979',
  appId: '1:1034499329979:web:685cd3a345db1b03a8fe9e',
  measurementId: 'G-Q6KNFPQP89'
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui
