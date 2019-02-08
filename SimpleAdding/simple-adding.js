const SimpleAdding = num => {
  if (num > 1) {
    let sum = 0,
        count = 0;
    while (count <= num) {
      sum += count;
      count++;
    }
    console.log(sum);
  }
  else console.log(num);
}

SimpleAdding(2);

