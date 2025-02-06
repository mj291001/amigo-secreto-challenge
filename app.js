// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para nombres
const amigos = [];

const listaDeAmigos = document.getElementById("listaAmigos");

//Función para agregar amigos
function agregarAmigo() {
    const nombreDeAmigo = document.getElementById("amigo").value;
     
    if (nombreDeAmigo === "") {
        alert ("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreDeAmigo);
        mostrarNombres();
        limpiarInput();
    }
}

//Función para mostrar nombres añadidos
function mostrarNombres() {
  listaDeAmigos.innerHTML = ""; 
  for (let i = 0; i < amigos.length; i++) {
    listaDeAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
    //const listaDeAmigos = document.getElementById("listaAmigos");
    //const nuevoItem = document.createElement("li")
    //nuevoItem.textContent = nombre
    //listaDeAmigos.appendChild(nuevoItem)
}

function limpiarInput() {
    document.getElementById("amigo").value="";
}

//Función para amigo secreto
function sortearAmigo() {
   if (amigos.length === 0) {
    alert ("No hay nombres de amigos para sortear");
   } else {
   const indiceAleatorio = Math.floor(Math.random()*amigos.length);
   const amigoSorteado = amigos [indiceAleatorio];
   const amigoSecreto = document.getElementById("resultado");
   amigoSecreto.innerHTML = `El amigo secreto es: ${amigoSorteado}!`
   limpiarNombres()
   }
}

function limpiarNombres() {
    listaDeAmigos.remove();
}
