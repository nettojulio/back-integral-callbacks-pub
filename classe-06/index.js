const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const duracao = 10;
const rodada = duracao / jogadores.length;
let contagem = 0;
let turno = 0;

console.log(`Vamos comecar a partida em: 3, 2, 1... \nJogador ${jogadores[0]} inicie a partida!\n`)

const partida = setInterval(() => {
    if (contagem === 10) {
        console.log("A rodada terminou!")
        clearInterval(partida);
    } else {
        if (turno !== jogadores.length) {
            console.log(`Rodada atual: ${jogadores[turno]}`);
            turno++;
            if (turno === jogadores.length) {
                console.log(`Teremos uma nova rodada?!\n`)
            } else {
                console.log(`Jogador ${jogadores[turno]} sua vez...\n`)
            }
            contagem += rodada
        } else {
            turno = 0;
        }
    }
}, 1000 * rodada);