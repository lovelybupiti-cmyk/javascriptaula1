function verificarNivel() {
    const resposta = document.getElementById("resposta")
    const nivelSelecionado = document.querySelector("input[name='nivel']:checked").value

    console.log(resposta)
    console.log(nivelSelecionado)

    switch (nivelSelecionado) {
    case "jr":
        resposta.innerHTML = ("és junior")
        break;
    case "trainee":
        resposta.innerHTML = ("és trainee")
        break;
    case "pl":
        resposta.innerHTML = ("és pleno")
        break;
    case "sr":
        resposta.innerHTML = ("és senior")
        break;
}

}

