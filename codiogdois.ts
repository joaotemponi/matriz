/*
O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no github
*/

console.clear();
let teclado = require (`Prompt-sync`)();
let matrizDois: string[][] = new Array(3);


for (let i = 0; i < 3; i++) {
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 4; j++) {
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}] da matriz: `);

        matrizDois[i][j] = nome;
    }
}
console.log(matrizDois);