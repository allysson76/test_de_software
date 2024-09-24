document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const btn = document.getElementById('btn')
    const display = document.getElementById('display');

    btn.addEventListener('click', () => {
        display.textContent = `${Number(firstNumber.value) ** Number(secondNumber.value)}`;
    });
});
