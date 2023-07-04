const convertWeight = (weight) => {
  const lbs = weight * 2.2;

  if (lbs > 150) {
    return 'obese';
  } else if (lbs >= 100 && lbs <= 150) {
    return 'you are ok';
  } else {
    return 'underweight';
  }
};
const weightInKg = parseFloat(prompt('Enter weight in kilograms (kg):'));
const result = convertWeight(weightInKg);
alert(result);
