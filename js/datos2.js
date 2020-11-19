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

function guard() {

    var id = document.getElementById('id').value;
    var nomb = document.getElementById('nombrepro').value;
    var celu = document.getElementById('cel').value;
    var direccion = document.getElementById('direc').value;
    var correo = document.getElementById('corre').value;

    db.collection("proveedores").add({
        id: id,
        nombre: nomb,
        celular: celu,
        direccion: direccion,
        email: correo,



    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);

            document.getElementById('id').value = '';
            document.getElementById('nombrepro').value = '';
            document.getElementById('cel').value = '';
            document.getElementById('direc').value = '';
            document.getElementById('corre').value = '';

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

var tabla2 = document.getElementById('tabla2');
db.collection("proveedores").onSnapshot((querySnapshot) => {
    tabla2.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nomb}`);
        tabla2.innerHTML += `
        <tr>
        <td>${doc.data().id} </td>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().celular}</td>
        <td>${doc.data().direccion}</td>
        <td>${doc.data().email}</td>

        <td ><button class = "btn btn-warning" onclick = "editar('${doc.id}','${doc.data().id}','${doc.data().nombre}','${doc.data().celular}',
        '${doc.data().direccion}',' ${doc.data().email}')">editar</button></td>
        <td ><button class = "btn btn-danger" onclick = "eliminar('${doc.id}')">eliminar</button></td>
        </tr>
    `


    });
});
function eliminar(id) {
    db.collection("proveedores").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    }); test.firestore.js
}

function editar(id, id, nombre, celular, direccion,  correo,) {
    var washingtonRef = db.collection("empleados").doc(id);
    document.getElementById('id').value = id; //--->nombre de las variables (parentesis nombre del id)
    document.getElementById('nombrepro').value = nombre;
    document.getElementById('cel').value = celular;
    document.getElementById('direc').value = direccion;
    document.getElementById('corre').value = correo;

    var boton2 = document.getElementById('boton2');
    boton1.innerHTML = 'editar' //con esto cambia el nombre del boton
    //si se presiona wl boton editar se ejecutara la funcion de abajo

    boton2.onclick = function () {


        var id = document.getElementById('id').value;
        var nomb = document.getElementById('nombrepro').value;
        var celu = document.getElementById('cel').value;
        var direccion = document.getElementById('direc').value;
        var correo = document.getElementById('corre').value;


        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            id: id,
            nombre: nomb,
            celular: celu,
            direccion: direccion,
            email: correo,



        })
            .then(function () {
                console.log("Document successfully updated!");
                boton1.innerHTML = 'guardar'

                document.getElementById('id').value = '';
                 document.getElementById('nombrepro').value = '';
                 document.getElementById('cel').value = '';
                 document.getElementById('direc').value = '';
                 document.getElementById('corre').value = '';

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    }


}
function guardarem() {



    da.collection("proveedores").add({
        id: id,
            nombre: nomb,
            celular: celu,
            direccion: direccion,
            email: correo,

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('id').value = '';
                 document.getElementById('nombrepro').value = '';
                 document.getElementById('cel').value = '';
                 document.getElementById('direc').value = '';
                 document.getElementById('corre').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}