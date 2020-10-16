import assert from 'assert';

/** Exercicio Um - Descubra o número Primo */

var ehPrimo = function (num) {

    var divisores = 0

    for (var i = 1; i <= num; i++) {
        if (ehDivisaoExata(num, i)) divisores++
    }

    return (divisores == 2) ? 1 : 0
}

var ehDivisaoExata = function (dividendo, divisor) {
    return (dividendo % divisor == 0) ? 1 : 0
}

try {
    assert.strictEqual(1, ehDivisaoExata(3, 1))
    assert.strictEqual(1, ehDivisaoExata(3, 3))
    assert.strictEqual(0, ehDivisaoExata(3, 2))

    assert.strictEqual(1, ehPrimo(2))
    assert.strictEqual(1, ehPrimo(3))
    assert.strictEqual(1, ehPrimo(5))
    assert.strictEqual(1, ehPrimo(7))
    assert.strictEqual(1, ehPrimo(11))
    assert.strictEqual(1, ehPrimo(13))

    assert.strictEqual(0, ehPrimo(4))
    assert.strictEqual(0, ehPrimo(6))
    assert.strictEqual(0, ehPrimo(9))
    assert.strictEqual(0, ehPrimo(10))
    assert.strictEqual(0, ehPrimo(12))

    console.log('Teste 1 - OK');

} catch (error) {
    console.log(error);
}

/**Exercicio Dois - Somar Dígitos */
/**Dado o número 2015 o retorno deve ser 2 + 0 + 1 + 5 = 8 */

var somarDigitos = function (numero) {

    let somatorio = 0

    while (numero > 0) {
        somatorio += numero % 10
        numero = parseInt(numero / 10)
    }

    return somatorio

}

try {
    assert.strictEqual(8, somarDigitos(2015))
    assert.strictEqual(15, somarDigitos(456))
    console.log('Teste 2 - OK');
} catch (error) {
    console.log(error);
}


/**Exercicio Três - MDC */

var mdc = function (num1, num2) {

    let ehMaior = num1 > num2
    let maior, menor

    if (ehMaior) {
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }

    let resto = maior % menor

    while (resto !== 0) {
        resto = maior % menor
        maior = menor
        menor = resto
    }

    return maior

}

try {
    assert.strictEqual(3, mdc(24, 9))
    assert.strictEqual(10, mdc(30, 20))
    console.log('Teste 3 - OK');
} catch (error) {
    console.log(error);
}



/**Exercicio Quatro - MMC */

var mmc = function (num1, num2) {
    let resto, resultado1, resultado2

    resultado1 = num1
    resultado2 = num2

    do {
        resto = resultado1 % resultado2
        resultado1 = resultado2
        resultado2 = resto
    }
    while (resto > 0) {
    }

    return (num1 * num2) / resultado1

}

try {
    assert.strictEqual(60, mmc(12, 20))
    console.log('Teste 4 - OK');
} catch (error) {
    console.log(error);
}


