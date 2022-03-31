// João Pster
// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let retorno = (`${array[array.length - 1]}, ${array[0]}`);
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -999;
  let quantiaDeVezesDoMaiorNumero = 0;

  for (let key of array) {
    if (key > maiorNumero) {
      maiorNumero = key;
    }
  }

  for (let numbers of array) {
    if (numbers === maiorNumero) {
      quantiaDeVezesDoMaiorNumero += 1;
    }
  }

  return quantiaDeVezesDoMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 > distancia2) {
    return 'cat2';
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// Utilizei como referência o site (https://endubueze00.medium.com/javascript-algorithm-fizzbuzz-42129ee418e6).
// Utilizei este site para ver oque eu estava errando, e descobri que eu estava errando era tentar dividir o number / X esperando um resultado, sendo que eu deveria era comprar o resto da divisão sendo igual a 0, para ver se ele é divisível ou não.
function fizzBuzz(array) {
  let arrayResposta = [];

  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      arrayResposta.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arrayResposta.push('fizz');
    } else if (number % 5 === 0) {
      arrayResposta.push('buzz');
    } else {
      arrayResposta.push('bug!');
    }
  }

  return arrayResposta;
}

// Desafio 9
function encode(string) {
  let arrayCodificado = [];

  for (let letter of string) {
    switch (letter) {
    case 'a':
      arrayCodificado.push('1');
      break;
    case 'e':
      arrayCodificado.push('2');
      break;
    case 'i':
      arrayCodificado.push('3');
      break;
    case 'o':
      arrayCodificado.push('4');
      break;
    case 'u':
      arrayCodificado.push('5');
      break;

    default:
      arrayCodificado.push(letter);
      break;
    }
  }

  return arrayCodificado.join('');
}

function decode(string) {
  let arrayDecodificado = [];

  for (let letter of string) {
    switch (letter) {
    case '1':
      arrayDecodificado.push('a');
      break;
    case '2':
      arrayDecodificado.push('e');
      break;
    case '3':
      arrayDecodificado.push('i');
      break;
    case '4':
      arrayDecodificado.push('o');
      break;
    case '5':
      arrayDecodificado.push('u');
      break;

    default:
      arrayDecodificado.push(letter);
      break;
    }
  }

  return arrayDecodificado.join('');
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  let techSort = tech.sort();
  let arrayResposta = [];

  for (let techs of techSort) {
    arrayResposta.push({
      tech: techs,
      name,
    });
  }

  return arrayResposta;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
