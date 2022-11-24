function stringRepeat(s, n) {
  
  res = ""
  for(let i=0; i < n; i++) {
    res = res + s
  }
  return res;
 
}


console.log(stringRepeat("l",6))
