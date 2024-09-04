function Fibonacci(n) {
    let a = 0, b = 1;
    
    if (n === 0 || n === 1) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    }

    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === n) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

const numero = parseInt(prompt("Informe um número: "));
const resultado = Fibonacci(numero);
console.log(resultado);
