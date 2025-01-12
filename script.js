/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result: ', maxOfTwoNumbers(3, 9));

  const isAdult = (age) => {
    if (age >= 18) {
        return ('Adult');
    } else {
        return ('Minor');
    }
  }

  console.log('Exercise 2 Result: ', isAdult(21));


  const isCharAVowel = (x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x ==='u') {
      return true;
  } else {
      return false;
  }
  }
  console.log('Exercise 3 Result: ', isCharAVowel('h'));


  const generateEmail = (name, domain) => {
    return (`${name}@${domain}`);
  }

  console.log('Exercise 4 Result: ', generateEmail("Johnsmith", "example.com"))


  const morning = 'Good Morning!';
  const evening = 'Good Evening!';
  const afternoon = 'Good Afternoon!';
  const userNames = ['Sam', 'John', 'Denis'];

  function greetUser(timeOfDay, userNames) {
  return `${timeOfDay}, ${userNames}`;
}
  console.log('Exercise 5 Result: ', greetUser(morning, userNames[1]));

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


  const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount * tipPercentage/100);
  }

  console.log('Exercise 7 Result: ', calculateTip(100,20))

  const convertTemperature = (temperature, scale) => {
    if (scale === "C") {
      return (temperature * 9/5 + 32);
    } else if (scale === "F") {
      return ((temperature - 32) * 5/9);
    }
  }

  console.log('Exercise 8 Result: ', convertTemperature(89.6, "F"))


  const basicCalculator = (numberOne, numberTwo, operation) => {

    if (operation === 'add') {
      return numberOne + numberTwo;
  } else if (operation === 'subtract') {
    return numberOne - numberTwo;
  } else if (operation === 'multiply') {
    return numberOne * numberTwo;
  } else if (operation === 'divide') {
    return numberOne / numberTwo;
  } else {
    return ('Enter a valid number.')
  }

  }

  console.log('Exercise 9 Result: ',basicCalculator(10, 10, 'divide'));

  const calculateGrade = (grade) => {
      if (grade >= 90) {
        return 'A'; 
    } else if (grade <= 89 && grade >= 80) {
        return 'B';
    } else if (grade <= 79 && grade >= 70) {
        return 'C';
    } else if (grade <= 69 && grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
  }

  console.log('Exercise 10 Result:',calculateGrade(100));

  const createUsername = (firstName, lastName) => {
    const userName = firstName.slice(0, 3) + lastName.slice(0, 3) + (firstName.length + lastName.length);
    return userName;
  }

  console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

  const numArgs = () => {
    return arguments.length - 1;
}

  console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));  