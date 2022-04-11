const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Este programa vai chegar se voce e maior de 18 anoe e tem habilitacao');
console.log('Precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('Qual ano do seu nascimento?', ano => {
    if(ano > 2004){
        console.log('Voce e bebe');
        return;
    } else {
        readLine.question('tem habilitacao? (Sim/Nao)', habilitado => {
            if(!(habilitado.toLocaleLowerCase()) === 'sim'){
                console.log('Voce nao tem habilitacao para entrar no kart')
            } else {
                readLine.question('Qual seu nome? ', nome => {
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart ' + nome);
                            break
                        case 'Rafael':
                            console.log('Bem vindo ao Kart ' + nome);
                            break;
                        default:
                            console.log('Seu nome nao esta cadastrado no Kart ' + nome);
                    }
                })
            }
        })
    }
})