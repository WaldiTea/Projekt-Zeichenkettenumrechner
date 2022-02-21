const separatedString = document.getElementById('separated-string');
const separationPosition = document.getElementById('separation-position');
const separateBefore = document.getElementById('separate-before');
const separateAfter = document.getElementById('separate-after');
const outputFront = document.getElementById('output-front');
const outputBack = document.getElementById('output-back');

separate = () => {
  let inputText = separatedString.value;
  let inputWord = separationPosition.value;

  if(separateBefore.checked) {
    let posBeginn = inputText.substring(0, inputText.indexOf(inputWord));
    let posEnd = inputText.substring(inputText.indexOf(inputWord));
    outputFront.innerHTML = posBeginn;
    outputBack.innerHTML = posEnd;
    errorMessage(inputText, inputWord, 'Zeichen nicht vorhanden');
  } else {
    let posBeginn = inputText.substring(0, inputText.indexOf(inputWord)) + inputWord;
    let posEnd = inputText.substring(inputText.indexOf(inputWord)).replace(inputWord, '');
    outputFront.innerHTML = posBeginn;
    outputBack.innerHTML = posEnd;
    errorMessage(inputText, inputWord, 'Zeichen nicht vorhanden');
  }
}

errorMessage = (text, word, errorText) => {
  if(text.indexOf(word) === -1) {
    outputFront.innerHTML = errorText;
    outputBack.innerHTML = errorText;
  }
}