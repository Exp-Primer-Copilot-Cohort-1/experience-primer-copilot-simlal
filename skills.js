function calculateNumbers(var1, var2) {
  return var1 + var2;
}

function skillsMember() {
  const skills = {
    name: "John",
    age: 30,
    calculateNumbers: calculateNumbers,
  };

  return skills;
}