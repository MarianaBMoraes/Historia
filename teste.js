// Função para contar palavras e suas frequências
function contarPalavras(texto) {
    // Remover pontuações e converter para minúsculas
    texto = texto.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    // Dividir o texto em palavras
    let palavras = texto.split(/\s+/);
    
    // Objeto para armazenar a contagem de cada palavra
    let contagem = {};

    // Contar a frequência de cada palavra
    palavras.forEach(palavra => {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    });

    // Ordenar as palavras alfabeticamente
    let palavrasOrdenadas = Object.keys(contagem).sort();

    // Calcular o número total de palavras
    let totalPalavras = palavras.length;

    // Exibir a contagem de palavras e frequência de cada uma
    console.log(`Número total de palavras: ${totalPalavras}`);
    console.log("Frequência de cada palavra:");

    palavrasOrdenadas.forEach(palavra => {
        console.log(`${palavra}: ${contagem[palavra]}`);
    });

    // Retornar a contagem completa
    return contagem;
}

// Exemplo de uso:
let textoExemplo = `Era uma vez, numa floresta encantada, um pequeno coelho branco. O coelho adorava pular entre as árvores e correr pelos campos verdes.`;

let resultado = contarPalavras(textoExemplo);
