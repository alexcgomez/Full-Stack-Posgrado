let form = document.forms[0];
let inputOp1 = document.querySelector('input[name="op1"]');
let inputOp2 = document.querySelector('input[name="op2"]');
let table = document.querySelector("main table");

// Al incluir la selección de la operación que se desea añadir(y ya que creo que no podemos guardar operadores aritméticos en variables) se ha creado esta función que no es mas que un switch-case que proporciona el resultado directamente del operador dado.

function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "**":
      return num1 ** num2;
    case "%":
      return num1 % num2;
    default:
      break;
  }
}

// Función que añade una fila a la tabla a partir de los operandos y la operación que se le pasa.

function addRow(num1, num2, operation) {
  let tr = document.createElement("tr");

  let result = calculate(num1, num2, operation);

  tr.innerHTML = `<td>${num1} ${operation} ${num2}</td><td>${result}</td>`;

  table.appendChild(tr);
}

// Función que permite generar la tabla en base a los operandos. También se ha añadido que el usuario pueda seleccionar las operaciones a mostrar (suma, resta, división, modulo y exponente)

function createOpTable(num1, num2, ...operations) {
  table.innerHTML = "<tr><th>Operación</th><th>Resultado</th></tr>";

  for (let i = 0; i < operations.length; i++) {
    addRow(num1, num2, operations[i]);
  }

}

inputOp1.addEventListener("input", event => {
  event.preventDefault();

  createOpTable(Number(inputOp1.value), Number(inputOp2.value), "+", "/", "-", "%");
});

inputOp2.addEventListener("input", event => {
  event.preventDefault();

  createOpTable(Number(inputOp1.value), Number(inputOp2.value), "+", "/", "-", "%");
});