function vowelCountWithoutY(s) {
  nbVowel = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "a" || s.charAt(i) == "A" || s.charAt(i) == "e" || s.charAt(i) == "E" || s.charAt(i) == "i" || s.charAt(i) == "I" || s.charAt(i) == "o" || s.charAt(i) == "O" || s.charAt(i) == "u" || s.charAt(i) == "U") {
      nbVowel++;
    }
  }
  return nbVowel;
}

console.log(vowelCountWithoutY("Azerty"));
