function calculate() {
    // Getting values from inputs
    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Проверяем выбранную операцию и выполняем вычисление
    switch(operation) {
        case 'add':
            result = numA + numB;
            break;
        case 'subtract':
            result = numA - numB;
            break;
        case 'multiply':
            result = numA * numB;
            break;
        case 'divide':
            result = numA / numB;
            break;
        default:
            result = 'Неверная операция';
    }

    // Выводим результат
    document.getElementById('result').innerText = result;
}
