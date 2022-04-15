
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function validarNumero(numero) {
    const resultado = Number.parseFloat(numero);
    if(!resultado) {
        console.log(`numero informado nao e valido`);
    }
    return resultado
}

function validarOperador(operador){
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('operador informado invalido')
            return null;
    }
}

readLine.question('Favor informar um numero ', (numero1) => {
    const num1 = validarNumero(numero1)
    
    if(num1){
        readLine.question('Favor informar outro numero ', (numero2) => {
            const num2 = validarNumero(numero2)

            if(num2){
                readLine.question('favor informar o operador ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': console.log(`operador selecionado + = ${num1} + ${num2} = ${num1 + num2}`)
                                break;
                            case '-': console.log(`operador selecionado - = ${num1} - ${num2} = ${num1 - num2}`)
                                break
                            case '*': console.log(`operador selecionado * = ${num1} * ${num2} = ${num1 * num2}`)
                                break;
                            case '/': console.log(`operador selecionado / = ${num1} / ${num2} = ${num1 / num2}`)
                                break;
                            case '%': console.log(`operador selecionado % = ${num1} % ${num2} = ${num1 % num2}`)
                                break;
                        }
                    }
                })
            }
        });
    }
});