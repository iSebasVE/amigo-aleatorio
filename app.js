let nombreAmigos = [];

function agregarAmigo() {
    nombreIngresado = document.getElementById('amigo').value;
    console.log(nombreAmigos);
    
    if (nombreIngresado == '') {
        alert('Por favor, inserte un nombre');
    } else {
        nombreAmigos.push(nombreIngresado)
        limpiarNombre();
        listaNombres();
        return nombreAmigos;
    }
}

function limpiarNombre() {
    let valorNombre = document.querySelector('#amigo');
    valorNombre.value = '';
}

function listaNombres() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombreAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (nombreAmigos.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSorteado = nombreAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    
}


