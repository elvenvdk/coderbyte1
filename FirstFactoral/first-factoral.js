


const firstFactoral = num => {
  if (num <= 1) console.log(num);
  else {
    let sum = 1;
    while (num > 0) {
      sum *= num;
      num--;
    }
    console.log(sum);
  }
}

firstFactoral(8);
