// Declaração de variáveis
let nomeHeroi = "Alex";                  // Nome 
let pontosXpHeroi = ["11000"];          // Pontuação[11000]
let nivelXpHeroi;                      // Nível a ser determinado
let xpHeroi = pontosXpHeroi[0];        // Obtém o valor de XP do array[11000]neste exemplo

// Loop for (neste caso, o loop executa apenas uma vez, já que o array[pontosXpHeroi] tem apenas um elemento)
// Estrutura de decisão if-else
for (let i = 0; i < pontosXpHeroi.length; i++) { 
    if (xpHeroi <= 1000) {nivelXpHeroi = "Ferro";} 
    else if (xpHeroi >= 1001 && xpHeroi <= 2000) {nivelXpHeroi = "Bronze"; } 
    else if (xpHeroi >= 2001 && xpHeroi <= 5000) {nivelXpHeroi = "Prata"; } 
    else if (xpHeroi >= 5001 && xpHeroi <= 7000) {nivelXpHeroi = "Ouro"; } 
    else if (xpHeroi >= 7001 && xpHeroi <= 8000) {nivelXpHeroi = "Platina"; } 
    else if (xpHeroi >= 8001 && xpHeroi <= 9000) {nivelXpHeroi = "Ascendente"; } 
    else if (xpHeroi >= 9001 && xpHeroi <= 10000) {nivelXpHeroi = "Imortal"; } 
    else {nivelXpHeroi = "Radiante"; }
}

// Saída
console.log("O Herói de nome " + nomeHeroi + " está no nível: " + nivelXpHeroi);

