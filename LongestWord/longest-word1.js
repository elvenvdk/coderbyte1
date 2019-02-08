const longestWord = sen => {
  const senArr = sen.split(' ');
  const sortedSenArr = senArr.sort((a, b) => b.length - a.length);
  return sortedSenArr[0];
}

longestWord("I love big titties hell yeah mafucka");