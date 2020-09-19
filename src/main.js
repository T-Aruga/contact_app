import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false



const firebaseConfig = {
  apiKey: "AIzaSyBoCeBrXTvID48orVWiOSzYdtuT9N31FOA",
  authDomain: "myaddress-pj-ad09a.firebaseapp.com",
  databaseURL: "https://myaddress-pj-ad09a.firebaseio.com",
  projectId: "myaddress-pj-ad09a",
  storageBucket: "myaddress-pj-ad09a.appspot.com",
  messagingSenderId: "15251062818",
  appId: "1:15251062818:web:59cee6b0cb5d5aa21dca7b",
  measurementId: "G-FXMPYP4Y7T"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
