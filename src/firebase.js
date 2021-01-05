import firebase from 'firebase'

window.onload = function() {
    loadCaptcha();
};

function loadCaptcha(){
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
}

const config = {
    apiKey: "AIzaSyDUZOFDslFGOP6cHp24lXlEK-XrTb237sc",
    authDomain: "ecommerce-9e628.firebaseapp.com",
    projectId: "ecommerce-9e628",
    storageBucket: "ecommerce-9e628.appspot.com",
    messagingSenderId: "833470779071",
    appId: "1:833470779071:web:3283567f0d743edc59c00a"
}

firebase.initializeApp(config);



export default firebase