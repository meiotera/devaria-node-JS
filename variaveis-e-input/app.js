const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaString = 'Minha string constante';

console.log(minhaString);

let leituraDeCampo;
readLine.question('Digite sua idade:', input => {

    leituraDeCampo = input;
    console.log(`O usuario digitou ${leituraDeCampo}` );

    
});
