function splitStringIntoArray(str) {
    // Use the split() method to split the string into an array
    var words = str.split(" ");
  
    return words;
  }
  
  // Prompt the user to enter a string
  var inputString = prompt("Enter a string:");
  
  // Split the string into an array of words
  var wordArray = splitStringIntoArray(inputString);
  
  // Display the array of words using console.log
  console.log("Array of Words:", wordArray);
