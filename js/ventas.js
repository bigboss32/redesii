console.log("agregado");
// Initialize Cloud Firestore through Firebase
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

function guardarventa() {
    var ventaecha = document.getElementById('venta').value; /*obtener el valor del input por id*/
    var codigocliente = document.getElementById('codigocliente').value; /*obtener el valor del input por id*/
    var productoventa = document.getElementById('productoventa').value; /*obtener el valor del input por id*/
    var cantidadventa = document.getElementById('cantidadproducto').value; /*obtener el valor del input por id*/
    var preciounitario = document.getElementById('preciounitario').value; /*obtener el valor del input por id*/
    var preciototalventa = document.getElementById('preciototal').value; /*obtener el valor del input por id*/

    // if (producto.value != null && categoria.value != null && precio.value != null && cantidad.value != null && imagen.value != null) {
    db.collection("venta").add({
        venta: ventaecha,
        codigocliente: codigocliente,
        producto: productoventa,
        cantidad: cantidadventa,
        preciounitario: preciounitario,
        preciototal: preciototalventa

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('venta').value = "";
            document.getElementById('codigocliente').value = "";
            document.getElementById('productoventa').value = "";
            document.getElementById('cantidadproducto').value = "";
            document.getElementById('preciounitario').value = ""; /*codigo para limpiar las variables*/
            document.getElementById('preciototal').value = ""; /*codigo para limpiar las variables*/
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

/*listar venta*/
var tablaventas = document.getElementById('tablaventas');
db.collection("venta").onSnapshot((querySnapshot) => {
    tablaventas.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().venta}`);
        tablaventas.innerHTML += `
        <tr>
        <td>${doc.data().venta} </td>
        <td>${doc.data().codigocliente}</td>
        <td>${doc.data().producto}</td>
        <td>${doc.data().cantidad}</td>
        <td>${doc.data().preciounitario}</td>
        <td>${doc.data().preciototal}</td>
        <td ><button class = "btn btn-warning" onclick = "editarventa('${doc.id}','${doc.data().venta}','${doc.data().codigocliente}','${doc.data().producto}','${doc.data().cantidad}','${doc.data().preciounitario}','${doc.data().preciototal}')">editar</button></td>
        <td ><button class = "btn btn-danger" onclick = "eliminarventa('${doc.id}')">eliminar</button></td>
        </tr>
    `
    });
});
/*eliminar venta*/
function eliminarventa(id) {
    db.collection("venta").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    }); test.firestore.js
}

function editarventa(id, venta, codigocliente, producto, cantidad, preciounitario, preciototal) {
    var washingtonRef = db.collection("venta").doc(id);
    /*envio de la base de datos al formulario*/
    document.getElementById('venta').value = venta;
    document.getElementById('codigocliente').value = codigocliente;
    document.getElementById('productoventa').value = producto;
    document.getElementById('cantidadproducto').value = cantidad;
    document.getElementById('preciounitario').value = preciounitario; /*codigo para limpiar las variables*/
    document.getElementById('preciototal').value = preciototal; /*codigo para limpiar las variables*/

    var boton = document.getElementById('botonguardarventa');
    boton.innerHTML = 'editar';//con esto cambia el nombre del boton

    //si se presiona wl boton editar se ejecutara la funcion de abajo

    boton.onclick = function () {
        /*aqui venia la variable washinton*/
        var ventica = document.getElementById('venta').value;
        var codcli = document.getElementById('codigocliente').value;
        var proven = document.getElementById('productoventa').value ;
        var canpro = document.getElementById('cantidadproducto').value;
        var preuni = document.getElementById('preciounitario').value; /*codigo para limpiar las variables*/
        var pretot = document.getElementById('preciototal').value; /*codigo para limpiar las variabl*/
        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            venta = ventica,
            codigocliente = codcli,
            productoventa = proven,
            cantidadproducto = canpro,
            preciounitario = preuni,
            preciototal = pretot
        })
            .then(function () { /*limpiar*/
                console.log("Document successfully updated!");
                boton.innerHTML = 'guardar venta';
                document.getElementById('venta').value = '';
                document.getElementById('codigocliente').value = '';
                document.getElementById('productoventa').value = '';
                document.getElementById('cantidadproducto').value = '';
                document.getElementById('preciounitario').value = '';
                document.getElementById('preciototal').value = '';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}




