/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  const isAdult = (age) => {
    if (age >= 18) {
        return ('Adult');
    } else {
        return ('Minor');
    }
  }

  console.log('Exercise 2 Result: ', isAdult(21));

  const isCharAVowel = (char) => {
    if (char === ('a')) {
        return ('True');
    } else {
        return ('False')
    }
  }

  console.log('Exercise 3 Result: ', isCharAVowel('a'));



  const generateEmail = (name, domain) => {
    return (`${name}@${domain}`);
  }

  console.log('Exercise 4 Result: ', generateEmail("Johnsmith", "example.com"))

  const greetUser = (name, timeOfDay) => {
    return (`${timeOfDay}! ${name}`);
  }

  console.log('Exercise 5 Result: ', greetUser("Zaid", "Good morning"))

  const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 || num1 > num3) {
      return (num1);
    } else if (num2 > num1 || num2 > num3) {
      return (num2);
    } else if (num3 > num1 || num3 > num2) {
      return (num3);
    } else ("Check your code");
  }

    console.log('Exercise 6 Result: ', maxOfThree(50, 10, 8));


  const calculateTip = (bill, perc) => {
    return (bill * perc/100);
  }

  console.log('Exercise 7 Result: ', calculateTip(100,20))

  const convertTemperature = (temperature, scale) => {
    if (scale === "C") {
      return (temperature * 9/5 + 32);
    } else if (scale === "F") {
      return (temperature * 1.8 + 32);
    }
  }

  console.log('Exercise 8 Result: ', convertTemperature(100, "C"))

  const basicCalculator = (num1, num2, ops) => {

  }