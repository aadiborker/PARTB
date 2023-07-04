function countVowels(str) {
    var vowelCount = 0;
    var lowerCaseStr = str.toLowerCase();
    for (var i = 0; i < lowerCaseStr.length; i++) {

      if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {

        vowelCount++;
      }
    }
    return vowelCount;
  }
  var inputString = prompt("Enter a string:");
  var result = countVowels(inputString);
  alert("Number of vowels in the string: " + result);
