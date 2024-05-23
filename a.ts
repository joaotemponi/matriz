const teclado = require(`prompt-sync`)();

let matrizAtv6 = new Array(3);

for (let c = 0; c < 3; c++) {
    matrizAtv6[c] = new Array(3);
    for (let l = 0; l < 3; l++) {
        let n: number = teclado(`Digite um número de 0 a 9 para o endereço [${c}, ${l}]: `);
        do {
            let numero: number = parseInt(teclado(`Digite um número de 0 a 9: `));
            if (n < 0 || n > 9) {
                console.log(`Digite um número entre 0 e 9`);
            }
        } while (n < 0 || n > 9);
        matrizAtv6[c][l] = n
    }
}
console.log(matrizAtv6);