const AlphabetSoup = str => {
  str = str.split('');
  const newStr = str.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  console.log(newStr);
}

AlphabetSoup("coderbyte");