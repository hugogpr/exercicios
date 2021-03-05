/**

    \d - Qualquer dígito de caractere
    \w - Um caractere alfanumerico
    \s - Qualquer caractere de espaço em branco
    \D - Caracteres que não são dígitos
    \W - Caractere não-alfanumerico
    \S - Caractere que não seja espaço em branco
    . - Qualquer caractere, menos nova linha.
    
    \b - Quando quiser determinar o final
*/

const pontoRegex = /./;

console.log('.');
console.log(pontoRegex.test("asd"));//true
console.log(pontoRegex.test(" "));//true
console.log(pontoRegex.test("123"));//true
console.log(pontoRegex.test("123sad"));//true

console.log('\n');

const dRegex = /\d/;//[0-9]

console.log('d');
console.log(dRegex.test("asd"));//false
console.log(dRegex.test(" "));//false
console.log(dRegex.test("123"));//true
console.log(dRegex.test("123sad"));//true

console.log('\n');

const dRegex2 = /\D/;//[^0-9]

console.log('D');
console.log(dRegex2.test("asd"));//true
console.log(dRegex2.test(" "));//true
console.log(dRegex2.test("123"));//false
console.log(dRegex2.test("123sad"));//true

console.log('\n');

const sRegex = /\s/;

console.log('s');
console.log(sRegex.test("asd"));//false
console.log(sRegex.test(" "));//true
console.log(sRegex.test("123"));//false
console.log(sRegex.test("123sad"));//false

console.log('\n');

const wRegex = /\w/;//[^0-9]

console.log('w');
console.log(wRegex.test("asd"));//true
console.log(wRegex.test(" "));//false
console.log(wRegex.test("123"));//true
console.log(wRegex.test("123sad"));//true