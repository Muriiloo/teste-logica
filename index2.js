function verificar(str) {
    const ocorrencias = str.match(/a/gi);

    if (ocorrencias) {
        return `A letra 'a' aparece ${ocorrencias.length} vez(es) na string.`;
    } else {
        return `A letra 'a' não aparece na string.`;
    }
}

const string = prompt("Informe uma string:");
const resultado = verificar(string);
console.log(resultado);
