const firstReverse = str => {
  const strArr = str.split(' ');
  const revArr = [];
  strArr.forEach(element => {
    console.log(element.split('').reverse().join(''));
    revArr.push(element.split('').reverse().join(''));
  });
  console.log(revArr.join(' ').toString());
}

firstReverse("I Love Some Big Tittles");