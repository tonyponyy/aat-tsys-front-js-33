document.getElementById("calculadora").addEventListener("click", click_calculadora);
const display = document.getElementById("display");
let n2 = "";
let n1 = "";
let operador = "";

function hacer_operación() {
  console.log("operador-->" + operador);
  console.log("n2 -->" + n2);
  console.log("n1 -->" + n1);
  switch (operador) {
    case "+":
      n2 = (parseFloat(n1) + parseFloat(n2)).toString();
      break;
    case "-":
      n2 = (parseFloat(n1) - parseFloat(n2)).toString();
      break;
    case "*":
      n2 = (parseFloat(n1) * parseFloat(n2)).toString();
      break;
    case "/":
      n2 = (parseFloat(n1) / parseFloat(n2)).toString();
      break;
    case "Raiz":
      n2 = Math.sqrt(parseFloat(n1)).toString();
      break;
    case "1/x":
      n2 = (1 / parseFloat(n1)).toString();
      break;
    case "+/-":
      n2 = (-parseFloat(n1)).toString();
      break;
    case "%":
      n2 = ( parseFloat(n2)/100 * parseFloat(n1)).toString();
      break;
    default:
      break;
  }
}

function click_calculadora(e) {
  const elemento = e.target;

  if (elemento.tagName === "BUTTON") {
    const valor = elemento.textContent;
    if (valor === "C") {
      n2 = "";
      n1 = "";
      operador = "";
    } else if (valor === "CE") {
      n2 = "";
    } else if (valor === "=") {
      if (n1 !== "") {
        hacer_operación();
        operador = "";
        n1 = "";
      }
    } else {
      if (isNaN(valor)) {
        if (n1 !== "") {
          hacer_operación();
          n1 = n2;
          n2 = "";
          operador = valor;
        } else {
          operador = valor;
          n1 = n2;
          n2 = "";
        }
      } else {
        n2 += valor;
      }
    }
    if (n2) {
      display.value = n2;
    } else {
      display.value = 0;
    }
  }
}
