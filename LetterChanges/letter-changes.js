const LetterChanges = str => {
  const newStr = str.replace(/[a-z]/gi, char => (
    char === 'z' || char === 'Z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
  ));

  const upperCase = newStr.replace(/a|e|i|o|u/gi, vowel => (
    vowel.toUpperCase()
  ));

  console.log(upperCase);
}

LetterChanges('hello*3');

LetterChanges('fun times');