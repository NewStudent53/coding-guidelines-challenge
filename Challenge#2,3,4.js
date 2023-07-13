//CHALLENGE#2

/*{function calc(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        total += nums[i];
      }
    }
    return total;
  }
  
  const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
  console.log(calc(numbers));}*/

  function sumtNumbers(numbers) {
    let tSum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        tSum += numbers[i];
      }
    }
    return tSum;
  }
  
  const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
  console.log(sumtNumbers(numbers));

//CHALLENGE#3

/*{  let result = 0;

function add(x, y) {
  result = x + y;
}

function subtract(x, y) {
  result = x - y;
}

function accumulate(x) {
    result += x;
}

add(5, 10);
console.log(result);
subtract(6, 12);
accumulate(6);
console.log(result);}*/

function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function accumulate(x) {
    // This function is not longer possible
  }
  
  console.log(add(5, 10));
  console.log(subtract(6, 12));

//CHALLENGE #4.1
/*{function isOldEnoughToDrive(age) {
  if (age > 16) {
    return "Yes"
  } else {
    return "No";
  }
}}*/

function isOldEnoughToDrive(age) {
    if (age > 16) return "yes"
    return "no";
  }

//CHALLENGE #4.2
/*{function numberIsDivisible(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      if (num % 3 === 0) {
        return "Divisible by 2 and 3";
      } else {
        return "Divisible by 2";
      }
    } else {
      if (num % 3 === 0) {
        return "Divisible by 3";
      } else {
        return "Not divisible by 2 or 3";
      }
    }
  } else {
    return "Number is not positive";
  }
}}*/

function numberIsDivisible(num) {
    if (num % 3 === 0) {
        return "Divisible by 3";
      }
    if (num % 2 === 0) {
        return "Divisible by 2";
      }  
    if (num % 2 === 0 && num % 3 === 0) {
        return "Divisible by 2 and 3";
      }
    if (num <= 0) {
      return "Number is not positive";
    }
    return "Not divisible by 2 or 3";
  }