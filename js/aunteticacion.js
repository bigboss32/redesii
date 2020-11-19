

//Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD56zpsSHIwkDzz5y73XQ2njqt-DNfS5JU",
  authDomain: "gymmaster-b7240.firebaseapp.com",
  databaseURL: "https://gymmaster-b7240.firebaseio.com",
  projectId: "gymmaster-b7240",
  storageBucket: "gymmaster-b7240.appspot.com",
  messagingSenderId: "1087138891630",
  appId: "1:1087138891630:web:54e0225b937f179dc1e37f",
  measurementId: "G-RYD5RF5MYM"
};


firebase.initializeApp(firebaseConfig);

function registrarcorreo() {

  var email = document.getElementById('email').value;
  var contra = document.getElementById('contra').value;
  firebase.auth().createUserWithEmailAndPassword(email, contra).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function conti() {
  window.location = "registro.html"
}

function ingresar() {
  var user = document.getElementById('user').value;
  var pas = document.getElementById('pas').value;
  console.log(user);
  console.log(pas);
  
  firebase.auth().signInWithEmailAndPassword(user, pas).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  
  
}

function observador() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('si');

      aparece()
      var displayName = user.displayName;
      var email = user.email.value;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      console.log('no');
    }
  });

}
observador();

function aparece() {
  
  var boton = document.getElementById('n');
  var boton2 = document.getElementById('color');

 
  boton.innerHTML = `
  <center>
  <button onclick="salir()">Cerrar Sesion</button> 
  </center>
  `
  boton2.innerHTML = `
  <div id="colorlib-subscribe">
<center>
  Bienvenido para cerrar sesion ->
  <button onclick="salir()">Salir</button> 
</center>
</div>

  `
 
}
function salir() {
  firebase.auth().signOut()
    .then(function () {
      console.log('saliendo----');
    })
    .catch(function (error) {
      console.log(error);
    })
}
function idn(){
  window.location="index.html"
}
function admi(){
  var con=123
  var no=document.getElementById('pas').value;
  console.log(no);
  if (con==no) {
    window.location="gimnasio.html"
  }
}