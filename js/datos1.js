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

function guarde(){

    var cedu = document.getElementById('cedula1').value;
    var nombuno = document.getElementById('nombreuno1').value;
    var nombdos = document.getElementById('nombredos1').value;
    var apeuno = document.getElementById('apellidouno1').value;
    var apedos = document.getElementById('apellidodos1').value;
    var correo = document.getElementById('correo1').value;
    var tipo = document.getElementById('tipo1').value;

db.collection("empleados").add({
    cedula: cedu,
    nombreuno: nombuno,
    nombredos: nombdos,
    apellidouno: apeuno,
    apellidodos: apedos,
    email: correo,
    tipo:tipo
    
    
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('cedula1').value = '';
    document.getElementById('nombreuno1').value = '';
    document.getElementById('nombredos1').value = '';
    document.getElementById('apellidouno1').value = '';
    document.getElementById('apellidodos1').value = '';
    document.getElementById('correo1').value = '';
    document.getElementById('tipo1').value = '';
    
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

var tabla1 = document.getElementById('tabla1');
db.collection("empleados").onSnapshot((querySnapshot) => {
    tabla1.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombreuno}`);
        tabla1.innerHTML += `
        <tr>
        <td>${doc.data().cedula} </td>
        <td>${doc.data().nombreuno} ${doc.data().nombredos}</td>
        <td>${doc.data().apellidouno} ${doc.data().apellidodos}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().tipo}</td>

        <td ><button class = "btn btn-warning" onclick = "editar('${doc.id}','${doc.data().cedula}','${doc.data().nombreuno}','${doc.data().nombredos}',
        '${doc.data().apellidouno}',' ${doc.data().apellidodos}','${doc.data().email}','${doc.data().tipo}')">editar</button></td>
        <td ><button class = "btn btn-danger" onclick = "eliminar('${doc.id}')">eliminar</button></td>
        </tr>
    `


    });
});
function eliminar(id){
    db.collection("empleados").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    }); test.firestore.js
}

function editar(id,cedula,nombreuno,nombredos,apellidouno,apellidodos,correo,tipo){
    var washingtonRef = db.collection("empleados").doc(id);
    document.getElementById('cedula1').value = cedula; //--->nombre de las variables (parentesis nombre del id)
    document.getElementById('nombreuno1').value = nombreuno;
    document.getElementById('nombredos1').value = nombredos;
    document.getElementById('apellidouno1').value = apellidouno;
    document.getElementById('apellidodos1').value = apellidodos;
    document.getElementById('correo1').value = correo;
    document.getElementById('tipo1').value =tipo;
   var boton1= document.getElementById('boton1');
    boton1.innerHTML = 'editar' //con esto cambia el nombre del boton
    //si se presiona wl boton editar se ejecutara la funcion de abajo

    boton1.onclick = function() {

        var cedu = document.getElementById('cedula1').value;
        var nombuno = document.getElementById('nombreuno1').value;
        var nombdos = document.getElementById('nombredos1').value;
        var apeuno = document.getElementById('apellidouno1').value;
        var apedos = document.getElementById('apellidodos1').value;
        var correo = document.getElementById('correo1').value;
        var tipo = document.getElementById('tipo1').value;
    
        // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
            cedula: cedu,
            nombreuno: nombuno,
            nombredos: nombdos,
            apellidouno: apeuno,
            apellidodos: apedos,
            email: correo,
            tipo:tipo
    

    })
    .then(function() {
        console.log("Document successfully updated!");
        boton1.innerHTML = 'guardar'
        document.getElementById('cedula1').value = '';
            document.getElementById('nombreuno1').value = '';
            document.getElementById('nombredos1').value = '';
            document.getElementById('apellidouno1').value = '';
            document.getElementById('apellidodos1').value = '';
            document.getElementById('correo1').value = '';
            document.getElementById('tipo1').value = '';
            
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    }

    
}
function guardarem(){
  


da.collection("empleados").add({
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
        document.getElementById('cedula1').value = '';
        document.getElementById('nombreuno1').value = '';
        document.getElementById('nombredos1').value = '';
        document.getElementById('apellidouno1').value = '';
        document.getElementById('apellidodos1').value = '';
        document.getElementById('correo1').value = '';
        document.getElementById('tipo1').value = '';
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

}