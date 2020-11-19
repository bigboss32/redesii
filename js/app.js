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

function guardarProducto() {
    var producto = document.getElementById('producto').value; /*obtener el valor del input por id*/
    var categoria = document.getElementById('categoria').value; /*obtener el valor del input por id*/
    var precio = document.getElementById('precio').value; /*obtener el valor del input por id*/
    var cantidad = document.getElementById('cantidad').value; /*obtener el valor del input por id*/
    var imagen = document.getElementById('imagen').value; /*obtener el valor del input por id*/

    // if (producto.value != null && categoria.value != null && precio.value != null && cantidad.value != null && imagen.value != null) {
    db.collection("producto").add({
        producto: producto,
        categoria: categoria,
        precio: precio,
        cantidad: cantidad,
        imagen: imagen
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('producto').value = document.getElementById('categoria').value = document.getElementById('precio').value = document.getElementById('cantidad').value = document.getElementById('imagen').value = ""; /*codigo para limpiar las variables*/
    })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });




}

var tablaproductos = document.getElementById('tablaproductos');
/*======================================listar productos=====================================*/
db.collection("producto").onSnapshot((querySnapshot) => { /*leer el documento y pintarlo dentro de la tabla*/
    tablaproductos.innerHTML = ''; /*tabla parte den vacia*/
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().producto}`);
        tablaproductos.innerHTML += `
         <tr>
         <td>${doc.id}</td>
         <td>${doc.data().producto}</td>
         <td>${doc.data().categoria}</td>
         <td>${doc.data().precio}</td>
         <td>${doc.data().cantidad}</td>
         <td>${doc.data().imagen}</td>
         <td ><button class = "btn btn-danger" onclick = "eliminarproducto('${doc.id}')">eliminar</button></td>
         <td ><button class = "btn btn-warning" onclick = "editarproducto('${doc.id}','${doc.data().producto}','${doc.data().categoria}','${doc.data().precio}','${doc.data().cantidad}','${doc.data().imagen}')"> editar</button></td>
         </tr>
         `
    });
});


/*============================================borrar productor=====================================*/
function eliminarproducto(id) { /*id correspondiente a la fila a elimnar*/
    db.collection("producto").doc(id).delete().then(function () { /*debe corresponder al id insertado al documento*/
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

/*===========================================editar producto========================================*/

function editarproducto(id, producto, categoria, precio, cantidad, imagen) {

    /*envio de la base de datos al formulario*/
    document.getElementById('producto').value = producto; //--->nombre de las variables (parentesis nombre del id)
    document.getElementById('categoria').value = categoria;
    document.getElementById('precio').value = precio;
    document.getElementById('cantidad').value = cantidad;
    document.getElementById('imagen').value = imagen;

    var boton = document.getElementById('botonguardarproducto');
    boton.innerHTML = 'editar';//con esto cambia el nombre del boton


    //si se presiona wl boton editar se ejecutara la funcion de abajo

    boton.onclick = function () {
        var washingtonRef = db.collection("producto").doc(id);

        var prod = document.getElementById('producto').value;
        var cate = document.getElementById('categoria').value;
        var prec = document.getElementById('precio').value;
        var cant = document.getElementById('cantidad').value;
        var imag = document.getElementById('imagen').value;
        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            producto: prod,
            categoria: cate,
            precio: prec,
            cantidad: cant,
            imagen: imag
        })
            .then(function () { /*limpiar*/
                console.log("Document successfully updated!");
                boton.innerHTML = 'guardar producto';
                document.getElementById('producto').value = '';
                document.getElementById('categoria').value = '';
                document.getElementById('cantidad').value = '';
                document.getElementById('precio').value = '';
                document.getElementById('imagen').value = '';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}

