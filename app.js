//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigos() {
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim();
    if (nome == "") {
        alert("Digite um nome primeiro");
        return;
    }
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
    
}
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista de amigos está vazia.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]; 
    document.getElementById("resultadoSorteio").innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;
}

