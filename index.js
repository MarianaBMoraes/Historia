const prompt = require("prompt-sync")();

let ocorrencias = {};

let historia = prompt("Conte uma história: ")
  .trim()
  .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .split(" ");
console.log(`Existem ${historia.length} palavras nesta história:`);

historia.forEach(function (palavra) {
  if (ocorrencias[palavra]) {
    ocorrencias[palavra]++;
  } else {
    ocorrencias[palavra] = 1;
  }
});

let palavras = Object.entries(ocorrencias);

let maiorOcorrencia = palavras[0];

for (let palavra of palavras)
  if (palavra[1] > maiorOcorrencia[1]) maiorOcorrencia = palavra;

console.log(ocorrencias);
console.log(historia);
console.log(`A palavra mais usada foi: ${maiorOcorrencia[0]}. (${maiorOcorrencia[1]} vezes.)`);
