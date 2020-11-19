var firebaseConfig = {
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
var db = firebase.firestore();
var nombre=document.getElementById("first-name");
    var apellido=document.getElementById("last-name");
    var edad=document.getElementById("age");
    var cel=document.getElementById("number");

function registrar() {
     
    db.collection("usuarios").add({
        Nombre: nombre.value,
        Apellido: apellido.value,
        Edad: edad.value,
        Celu: cel.value  

        })
        .then(function(docRef) {
            console.log("Documento guardado: ", docRef.id);
            window.location="login.html";
            
        })
        .catch(function(error) {
            console.error("Error: ", error);
        }
        
        );
       
}
 

