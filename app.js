// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para nombres
const amigos = [];


//Función para agregar amigos
function agregarAmigo () {
    const nombreDeAmigo = document.getElementById("amigo").value;
     
    if (nombreDeAmigo === "") {
        alert ("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreDeAmigo);
        mostrarNombres(nombreDeAmigo);
        limpiarInput();
    }
}

function mostrarNombres(nombre) {
    const listaDeAmigos = document.getElementById("listaAmigos");
    const nuevoItem = document.createElement("li")
    nuevoItem.textContent = nombre
    listaDeAmigos.appendChild(nuevoItem)
}

function limpiarInput () {
    document.getElementById("amigo").value="";
}

