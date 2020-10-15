/** Exercicio Um - Troca de variáveis com TDD */

import assert from 'assert';

let a, b, temp
a = 999
b = 555

temp = a
a = b
b = temp

try {
    assert.strictEqual(555, a)
    assert.strictEqual(999, b)
    console.log('Teste 1 OK');
} catch (e) {
    console.log(e)
}

/**Exercicio Dois - O dobro de qualquer número */

let dobro = function dobro(num) {
    return num + num
}

try {
    assert.strictEqual(10, dobro(5))
    console.log('Teste 2 OK');
} catch (error) {
    console.log(error)
}

/**Exercicio Três - Area quadrada */

let area = function (lado1, lado2) {
    return lado1 * lado2
}

try {
    assert.strictEqual(27, area(3, 9), "deve retornar a área")
    console.log('Teste 3 OK');
} catch (error) {
    console.log(error);
}

/**Exercicio Quatro - Antecessor e Sucessor */
let antecessor = function (numero) {
    return numero - 1
}

let sucessor = function (numero) {
    return numero + 1
}

try {
    assert.strictEqual(9, antecessor(10), "deve retornar o antecessor")
    assert.strictEqual(11, sucessor(10), "deve retornar a área")
    console.log('Teste 4 OK');
} catch (error) {
    console.log(error);
}

/**Exercicio Cinco - Média de três números */
let media = function (v1, v2, v3) {

    return (v1 + v2 + v3) / 3
}

try {
    assert.strictEqual(7, media(6, 7, 8), "deve retornar a média")
    console.log('Teste 5 OK');
} catch (error) {
    console.log(error);
}

/**Exercicio Seis - Descobrir os dias de N meses */
let dias = function (n_meses) {
    return n_meses * 30
}

try {
    assert.strictEqual(210, dias(7), "deve retornar o total de dias")
    console.log('Teste 6 OK');
} catch (error) {
    console.log(error);
}

/**Exercicio Sete - Funções matemáticas */

let somar = function (num, add) {
    return num + add
}
let subtrair = function (num, sub) {
    return num - sub
}
let multi = function (num, mult) {
    return num * mult
}
let div = function (num, div) {
    return num / div
}

try {
    let num = 10

    assert.strictEqual(12, somar(num, 2))
    assert.strictEqual(8, subtrair(num, 2))
    assert.strictEqual(20, multi(num, 2))
    assert.strictEqual(5, div(num, 2))
    console.log('Teste 7 OK');

} catch (error) {
    console.log(error);
}

/**Exercicio Oito - Custo de um carro novo */
/**Fórmula
 * custo final = custo de fábrica +
              (custo de fábrica * percentual do distribuidor) +
              (custo de fábrica * percentual de impostos)
 */

let custoFinal = function (custo) {
    return custo + (custo * 28 / 100) + (custo * 45 / 100)
}

try {
    assert.strictEqual(17300, custoFinal(10000))
    console.log('Teste 8 OK');
} catch (error) {
    console.log(error);
}

/**Exercicio Nove - Juros Simples */
/**Fórmula
 * J = C.i.n
 * J = Juros / C = Capital / i = Taxa de empréstimo / n = Períodos
 * -> EMPRESTIMO de 16.000,00 COM TAXA de 4% DURANTE 4 MESES
 */

let juros_simples = function (j, i, n) {
    return j * i * n
}


try {
    assert.strictEqual(2560, juros_simples(16000, 0.04, 4))
    console.log('Teste 9 OK');
} catch (error) {
    console.log(error);
}

/**Exercicio Nove - Juros Simples */
/**Reajuste de Salário
 * salario = 1000
 * reajuste = 15%
 */

let reajustar_salario = function (salario, reajuste) {
    
    return salario * reajuste
}

try {
    assert.strictEqual(150, reajustar_salario(1000, 0.15))
    console.log('Teste 10 OK');
} catch (error) {
    console.log(error);
}