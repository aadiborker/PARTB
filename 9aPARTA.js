function findLeapYears(startYear, endYear) {
  var leapYears = [];

  for (var year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}

// Prompt the user to enter the range of years
var startYear = parseInt(prompt("Enter the start year:"));
var endYear = parseInt(prompt("Enter the end year:"));

// Find the leap years in the given range
var leapYearsInRange = findLeapYears(startYear, endYear);

// Display the leap years
if (leapYearsInRange.length === 0) {
  alert("No leap years found in the given range.");
} else {
  alert("Leap years in the range " + startYear + " to " + endYear + ": "+ leapYearsInRange);
}
