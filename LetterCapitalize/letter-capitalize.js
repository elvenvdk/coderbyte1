const LetterCapitalized = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1).toLowerCase();
  }
  console.log(strArr.join(' ').toString());
}

LetterCapitalized('mary had a little lamb that was pretty cool');