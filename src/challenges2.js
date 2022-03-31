// Desafio 11
function determinarValidadeDosNumeros(array) {
  if (array.length != 11) {
    return true;
  }

  return false;
}

// Utilizei o repositório do Felipe Krein Rocha (https://github.com/tryber/sd-020-b-project-playground-functions/pull/15/files)
// Para me ajudar a pensar na lógica de como funcionaria a verificação da repetição de numeros dentro do array.
function determinarRepeticaoDosNumeros(array) {
  let count = 0;
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (array[index1] < 0 || array[index1] > 9 || count >= 3) {
      return true;
    }
    count = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2] === array[index1]) {
        count += 1;
      }
    }
  }

  return false;
}

function generatePhoneNumber(array) {
  if (determinarValidadeDosNumeros(array)) {
    return 'Array com tamanho incorreto.';
  } if (determinarRepeticaoDosNumeros(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let resultado = (`(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`);
  return resultado;
}

// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  if (linha1 < (linha2 + linha3) && linha1 > Math.abs(linha2 - linha3)
  && linha2 < (linha3 + linha1) && linha2 > Math.abs(linha3 - linha1)
  && linha3 < (linha1 + linha2) && linha3 > Math.abs(linha1 - linha2)) {
    return true;
  }

  return false;
}

// Desafio 13
// Gostaria de no futuro achar uma solução melhor.
function hydrate(string) {
  let agua = 0;
  for (let number of string) {
    switch (number) {
    case '1':
      agua += 1;
      break;
    case '2':
      agua += 2;
      break;
    case '3':
      agua += 3;
      break;
    case '4':
      agua += 4;
      break;
    case '5':
      agua += 5;
      break;
    case '6':
      agua += 6;
      break;
    case '7':
      agua += 7;
      break;
    case '8':
      agua += 8;
      break;
    case '9':
      agua += 9;
      break;

    default:
      break;
    }
  }

  if (agua == 1) {
    return (`${agua} copo de água`);
  }

  return (`${agua} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
