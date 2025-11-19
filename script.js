async function carregarJogos() {
    const resposta = await fetch("jogos.json");
    return await resposta.json();
}

document.getElementById("sortear").addEventListener("click", async () => {
    const categoria = document.getElementById("categoria").value;
    const resultado = document.getElementById("resultado");

    if (!categoria) {
        resultado.innerHTML = "<p>Escolha uma categoria primeiro 🌿</p>";
        return;
    }

    const jogos = await carregarJogos();
    const filtrados = jogos.filter(j => j.categoria === categoria);

    if (filtrados.length === 0) {
        resultado.innerHTML = "<p>Nenhum jogo encontrado nessa categoria 😢</p>";
        return;
    }

    // Sorteio
    const escolhido = filtrados[Math.floor(Math.random() * filtrados.length)];

    resultado.innerHTML = `
        <div class="resultado-conteudo">
            <img class="imagem-jogo" src="${escolhido.imagem}" alt="Imagem do jogo">
            <h2>${escolhido.titulo}</h2>
            <p style="opacity:0.7;">Categoria: ${escolhido.categoria}</p>
        </div>
    `;
});
