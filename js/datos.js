console.log("agregado");

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();



function guardar() {
    var cedu = document.getElementById('cedula').value;
    var nombuno = document.getElementById('nombreuno').value;
    var nombdos = document.getElementById('nombredos').value;
    var apeuno = document.getElementById('apellidouno').value;
    var apedos = document.getElementById('apellidodos').value;
    var correo = document.getElementById('correo').value;

    db.collection("cliente").add({
        cedula: cedu,
        nombreuno: nombuno,
        nombredos: nombdos,
        apellidouno: apeuno,
        apellidodos: apedos,
        email: correo

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('cedula').value = '';
            document.getElementById('nombreuno').value = '';
            document.getElementById('nombredos').value = '';
            document.getElementById('apellidouno').value = '';
            document.getElementById('apellidodos').value = '';
            document.getElementById('correo').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

var tabla = document.getElementById('tabla');
db.collection("cliente").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombreuno}`);
        tabla.innerHTML += `
        <tr>
        <td>${doc.data().cedula} </td>
        <td>${doc.data().nombreuno} ${doc.data().nombredos}</td>
        <td>${doc.data().apellidouno} ${doc.data().apellidodos}</td>
        <td>${doc.data().email}</td>
        <td ><button class = "btn btn-warning" onclick = "editar('${doc.id}','${doc.data().cedula}','${doc.data().nombreuno}','${doc.data().nombredos}',
        '${doc.data().apellidouno}',' ${doc.data().apellidodos}','${doc.data().email}')">editar</button></td>
        <td ><button class = "btn btn-danger" onclick = "eliminar('${doc.id}')">eliminar</button></td>
        </tr>
    `


    });
});
function eliminar(identi){
    db.collection("cliente").doc(identi).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    }); test.firestore.js
}

function editar(id,cedula,nombreuno,nombredos,apellidouno,apellidodos,correo){
    var washingtonRef = db.collection("cliente").doc(id);
    document.getElementById('cedula').value = cedula; //--->nombre de las variables (parentesis nombre del id)
    document.getElementById('nombreuno').value = nombreuno;
    document.getElementById('nombredos').value = nombredos;
    document.getElementById('apellidouno').value = apellidouno;
    document.getElementById('apellidodos').value = apellidodos;
    document.getElementById('correo').value = correo;
   var boton= document.getElementById('boton');
    boton.innerHTML = 'editar' //con esto cambia el nombre del boton
    //si se presiona wl boton editar se ejecutara la funcion de abajo

    boton.onclick = function() {

        var cedu = document.getElementById('cedula').value;
        var nombuno = document.getElementById('nombreuno').value;
        var nombdos = document.getElementById('nombredos').value;
        var apeuno = document.getElementById('apellidouno').value;
        var apedos = document.getElementById('apellidodos').value;
        var correo = document.getElementById('correo').value;
    
        // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
            cedula: cedu,
            nombreuno: nombuno,
            nombredos: nombdos,
            apellidouno: apeuno,
            apellidodos: apedos,
            email: correo
    

    })
    .then(function() {
        console.log("Document successfully updated!");
        boton.innerHTML = 'guardar'
        document.getElementById('cedula').value = '';
            document.getElementById('nombreuno').value = '';
            document.getElementById('nombredos').value = '';
            document.getElementById('apellidouno').value = '';
            document.getElementById('apellidodos').value = '';
            document.getElementById('correo').value = '';
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    }

    
}
function guardarem(){
  


da.collection("empleado").add({
    cedula: cedu,
    nombreuno: nombuno,
    nombredos: nombdos,
    apellidouno: apeuno,
    apellidodos: apedos,
    email: correo,
    tipo:tipo

})
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('cedula').value = '';
        document.getElementById('nombreuno').value = '';
        document.getElementById('nombredos').value = '';
        document.getElementById('apellidouno').value = '';
        document.getElementById('apellidodos').value = '';
        document.getElementById('correo').value = '';
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

}

//----------------------------CRUD EMPLEADOS--------------------------------------------------------------------------

