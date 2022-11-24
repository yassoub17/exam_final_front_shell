function firstAndLastCharacter(x) {
  lengthString = 0;
  for (let i = 0; i < x.length; i++) {
    lengthString++;
  }
  r = x.slice(1, lengthString - 1);
  return r;
}

console.log(firstAndLastCharacter(" Ceci est un test "));
