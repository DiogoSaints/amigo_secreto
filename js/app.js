let amigos = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo").value;
    if (amigos.includes(nome)){
    alert("Esse amigo já foi adicionado");
    return
    }else if (nome == ""){
    alert("Digite um nome válido");
    return
    }
    amigos.push(nome);
    document.getElementById("nome-amigo").value = ""
    console.log(amigos)
    document.getElementById("lista-amigos").innerHTML = amigos.join(", ");
}

function sortear() {
    shuffle(amigos)
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {
        let nextIndex = (i + 1) % amigos.length;
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[nextIndex] + '<br>';
    }
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = amigos;
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = "";
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

