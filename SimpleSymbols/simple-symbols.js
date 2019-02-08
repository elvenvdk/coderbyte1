const SimpleSymbols = str => {
  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) console.log(false);
  else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) console.log(false);
  else console.log(true);
}


SimpleSymbols("+d+=3=+s+");
SimpleSymbols("f++d+");