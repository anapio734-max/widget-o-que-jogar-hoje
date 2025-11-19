async function carregarJogos() {
    const response = await fetch("jogos.json");
    const jogos = await response.json();
    return jogos;
}

async function sortearJogo() {
    const categoriaEscolhida = document.getElementById("categoriaSelect").value;
    const jogos = await carregarJogos();

    const filtrados = categoriaEscolhida === "todos"
        ? jogos
        : jogos.filter(jogo => jogo.categoria === categoriaEscolhida);

    if (filtrados.length === 0) {
        document.getElementById("resultado").innerHTML = "<p>Nenhum jogo nessa categoria!</p>";
        return;
    }

    const sorteado = filtrados[Math.floor(Math.random() * filtrados.length)];

    document.getElementById("resultado").innerHTML = `
        <h2>${sorteado.titulo}</h2>
        <img src="${sorteado.imagem}" alt="${sorteado.titulo}">
    `;
}
