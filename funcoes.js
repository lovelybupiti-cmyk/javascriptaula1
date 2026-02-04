

//funções

//função sem parametro e sem retorno
function dizerOla() {
    console.log("Olá");
}

dizerOla()

//funções com parametros

function somar (num1, num2) {
    let soma = num1 + num2
    console.log(soma)
}
somar (2, 2)

function subtracao(num1, num2) {
    let subt = num1 - num2
    console.log(subt)
    
}
subtracao (5, 20)

//função de callback, function dentro de outra

//- Arrow functions (função de seta) É uma forma compacta em relação a expressão tradicional de uma função. Muito utilizada quando atribuímos uma função a uma variável.  Quando passamos 1 parâmetro e 1 linha de bloco de código, o parênteses é `*opcional*`

const cumprimentar = (nome) => console.log(`olá, ${nome}`);
cumprimentar ("mario")

