// do {
//   var opcoes = prompt(
//     "Escolha umas das opções a seguir:\n" +
//       "\n1.a" +
//       "\n2.b" +
//       "\n3.c" +
//       "\n4.d" +
//       "\n5.Encerrar"
//   );
//   alert("Você escolheu a opção: " + opcoes);
// } while (opcoes !== "5");
// alert("O sistema está sendo encerrado");
let opcoes = "5";
do {
  opcoes = prompt(
    "Escolha umas das opções a seguir:\n" +
      "\n1.a" +
      "\n2.b" +
      "\n3.c" +
      "\n4.d" +
      "\n5.Encerrar"
  );
  switch (opcoes) {
    case "1":
      alert("Você escolheu a opção 1.a");
      break;
    case "2":
      alert("Você escolheu a opção 2.b");
      break;
    case "3":
      alert("Você escolheu a opção 3.c");
      break;
    case "4":
      alert("Você escolheu a opção 4.d");
      break;
    case "5":
      alert("Você escolheu a opção 5.Encerrar");
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida.");
  }
} while (opcoes !== "5");
alert("O sistema está sendo encerrado");
