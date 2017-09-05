const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
(async () => { // async function is ES2017 Feature
  if (numbers.includes(5)) { // Array.prototype.includes is ES2016 Feature
    console.log('array includes 5',); // trailing commas in function is ES2017 Feature
  }
  for (const number of numbers) { // for..of.. is ES2015 Feature
    await console.log(number,);
  }
})();