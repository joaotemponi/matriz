/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,exiba a matriz na tela.
*/

console.clear();
const teclado = require(`prompt-sync`)();
let matrizAtv6: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    matrizAtv6[i] = new Array(3);
}
