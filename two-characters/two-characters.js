function alternate(s) {
  let charObj = {};
  let max = 0;
  let maxChar = "";
  let strLength = 0;

  // Criando um objeto com os caracteres e seu numero de aparicoes

  for (const char of s) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  // Iterando o objeto para descobrir o caracter com mais aparicoes

  for (const key in charObj) {
    if (charObj[key] > max) {
      max = charObj[key];
      maxChar = key;
    }
  }

  // Adicionando o caracter com mais aparicoes a string e removendo-o do objeto

  strLength += charObj[maxChar];
  delete charObj[maxChar];
  max = 0;

  // Iterando o objeto novamente para descobrir o segundo caracter com mais aparicoes

  for (const key in charObj) {
    if (charObj[key] > max) {
      max = charObj[key];
      maxChar = key;
    }
  }

  // Adicionando o segundo caracter com mais aparicoes a string

  strLength += charObj[maxChar];

  // Retornando o comprimento da string com os 2 caracteres com mais aparicoes

  return strLength;
}
