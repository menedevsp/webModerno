const escola = "Cod3r"

console.log(escola.charAt(4)); // retorna o caractere na posição 4
console.log(escola.charAt(5)); // retorna vazio
console.log(escola.charCodeAt(3)); // retorna o valor na tabela unicode
console.log(escola.indexOf('3')); // retorna a posição do caractere

console.log(escola.substring(1)); // retorna a string a partir da posição 1
console.log(escola.substring(0, 3)); // retorna a string da posição 0 até a 3
console.log('Escola '.concat(escola).concat("!")); // concatenação
console.log(escola.replace(3, 'e')); // substitui o 3 por e

console.log('Ana,Maria,Pedro'.split(',')); // transforma em array
