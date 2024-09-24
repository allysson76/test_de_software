const fs = require('fs');
const path = require('path');

// Carrega o conteúdo HTML
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

describe('Teste do cálculo das potências', () => {
    let firstNumber;
    let secondNumber;
    let display;
    let btn;

    beforeEach(() => {
        // Define o documento com o conteúdo HTML
        document.documentElement.innerHTML = html.toString();

        // Carrega o script JS (app.js) no ambiente de teste
        require('../public/app.js');

        // Pega os elementos DOM
        firstNumber = document.getElementById('firstNumber');
        secondNumber = document.getElementById('secondNumber');
        display = document.getElementById('display');
        btn = document.getElementById('btn');
    });

    test('Números negativos', () => {
        // Simula entrada de números
        firstNumber = (-3);
        secondNumber = (-2);

        // Simula clique no botão "Calcular"
        btn.click();

        // Verifica se o cálculo está correto
        expect(firstNumber ** secondNumber).toBe(0.1111111111111111);
    });

    test('Zero primeiro', () => {
        // Simula entrada de números
        firstNumber = 0;
        secondNumber = 2;

        // Simula clique no botão "Calcular"
        btn.click();

        // Verifica se o cálculo está correto
        expect(firstNumber ** secondNumber).toBe(0);
    });

    test('Zero segundo', () => {
        // Simula entrada de números
        firstNumber = 2;
        secondNumber = 0;

        // Simula clique no botão "Calcular"
        btn.click();

        // Verifica se o cálculo está correto
        expect(firstNumber ** secondNumber).toBe(1);
    });

    test('Números positivos', () => {
        // Simula entrada de números
        firstNumber = 7;
        secondNumber = 2;

        // Simula clique no botão "Calcular"
        btn.click();

        // Verifica se o cálculo está correto
        expect(firstNumber ** secondNumber).toBe(49);
    });
});
