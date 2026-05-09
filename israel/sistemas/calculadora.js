console.log("NOVA CALCULADORA");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("QUAL O PRIMEIRO NÚMERO QUE VOCÊ DESEJA?: ", function(num1) {

  num1 = Number(num1);

  rl.question("QUAL O SEGUNDO NÚMERO QUE VOCÊ DESEJA?: ", function(num2) {

    num2 = Number(num2);

    rl.question("QUAL A OPERAÇÃO DESEJADA? (+, -, *, /): ", function(operacao) {

      let resultado;

      if (operacao === "+") {
        resultado = num1 + num2;

      } else if (operacao === "-") {
        resultado = num1 - num2;

      } else if (operacao === "*") {
        resultado = num1 * num2;

      } else if (operacao === "/") {
        resultado = num1 / num2;

      } else {
        console.log("Operação inválida!");
        rl.close();
        return;
      }

      console.log("Resultado:", resultado);
      rl.close();
    });

  });

});
