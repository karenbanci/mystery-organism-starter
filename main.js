// Returns a random DNA base
// aqui ele vai sortear aleatoriamente a base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
console.log('DNA ORIGINAL ---- ANTES DA MUTAÇÃO');
console.log(mockUpStrand());

// criar função que tenha 2 parametros
// O primeiro parâmetro é um número (dois organismos não devem ter o mesmo número).
// O segundo parâmetro é uma matriz de 15 bases de DNA.
// pAequorFactory()deve retornar um objeto que contenha as propriedades specimenNum e dna que correspondam aos parâmetros fornecidos.

// Sua equipe quer que você simule a alta taxa de mutação do P. aequor (mudança em seu DNA).

// Para simular uma mutação, no pAequorFactory() objeto retornado de , adicione o método .mutate().

console.log("---- APOS A MUTAÇÃO");

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,

    mutate() {
      // aqui ele vai selecionar aleatoriamente uma base na propriedade do objeto DNA
      let randomIndex = Math.floor(Math.random() * this.dna.length);

      // gerar uma nova base aleatoriamente (mutada)
      // se a 1a base for A, a base nova deve ser alterada para T, C ou G
      let newBase = returnRandBase();

      //  certifique-se de que a base atual e a base gerada não sejam as mesmas
      if (this.dna[randomIndex] === newBase) {
        return `${newBase} Não houve mutacao`
      } else {
        return `${randomIndex} Houve mutacao`
      }
    },
    // comparar as sequencias do DNA
    // O comportamento de .compareDNA()é comparar os pAequor's de corrente com os pAequor's .dna passados ​​e calcular quantas bases são idênticas e nas mesmas localizações. não retorna nada, mas imprime uma mensagem informando a porcentagem de DNA que os dois objetos têm em comum — use o para identificar quais objetos estão sendo comparados.pAequor.dna.compareDNA().specimenNumpAequor

    // exemplo
    // ex1 = ['A', 'C', 'T', 'G']
    // ex2 = ['C', 'A', 'T', 'T']

    // ex1 e ex2 possuem apenas o 3º elemento em comum ( 'T') e, portanto, possuem 25% (1/4) de seu DNA em comum. A mensagem resultante leria algo como: specimen #1 and specimen #2 have 25% DNA in common
    compareDNA() {
      let mutateDNA = this.dna;
      let originalDNA = mockUpStrand;
      let comparative = 0;

      // pegando cada elemento da array DNA mutado
      for (let i=0; i < mutateDNA.length; i++) {
        // pegando cada elemento da arr Original
        for (let j=0; j < originalDNA.length; j++){
          // comparando se os elementos são iguais e estao no mesmo index
          if (i === j && mutateDNA[i] === originalDNA[j]) {
            // adicionar 1 a cada comparativo verdadeiro
            comparative  = comparative +1;
          }
        }
        console.log(`Specimen 1 e Specimen 2 tem ${Math.floor(100/15 * comparative)} % DNA em comum`);
      }
    },

    // P. aequor tem uma chance mais provável de sobrevivência se seu DNA for composto de pelo menos 60% 'C'de 'G'bases.
    // No objeto retornado de pAequorFactory(), adicione outro método .willLikelySurvive().
    // .willLikelySurvive()retorna se a matriz true do objeto contiver pelo menos 60% ou bases. Caso contrário, retorna falso..dna'C''G'.willLikelySurvive()
    // array = [ C A C C G G G G C T A C G A T ]

    willLikelySurvive() {
      let dnaScore = 0;
      const surviveStrand = [];

      for (let k=0; k < this.dna.length; k++){
        if (this.dna[k] === 'C' || this.dna[k] === 'G'){
          dnaScore = dnaScore + 1;
        }
      }
      if (Math.floor(100/15 * dnaScore) > 60) {
        surviveStrand.push(this.dna)
        console.log('sobreviveu');
      }
      return surviveStrand;
    }
  }
};

let resultado = pAequorFactory(2, mockUpStrand());
console.log(resultado);

console.log(resultado.willLikelySurvive());

console.log(resultado.mutate());
