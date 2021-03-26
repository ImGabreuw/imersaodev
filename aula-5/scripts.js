function adicionarFilme() {
    var campoFilme = document.querySelector('#filme')
    var filme = campoFilme.value

    if (filme.endsWith('.jpg')) {
        listarFilmesNaTela(filme)
    } else {
        alert("Imagem inválida")
    }

    campoFilme.value = ""
}

function listarFilmesNaTela(filme) {
    var filmes = document.querySelector('#listaFilmes')
    var filme = "<img src=" + filme + ">"

    filmes.innerHTML = filmes.innerHTML + filme
}