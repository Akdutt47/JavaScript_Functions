console.log("Hello World!\n==========\n");

// Exercise 1: Print Odds Continued
function printOdds(count) {
    // Check if the count is negative
    if (count < 0) {
      console.log("Please enter a positive number.");
      return; // Exit the function if count is negative
    }
  
    // Loop through numbers from 1 to count
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) { // Check if the number is odd
        console.log(i); // Print odd numbers
      }
    }
  }
  

// Exercise 2: Legal?
function checkAge(userName = "User", age = 0) { // Default values for parameters
    // Declare local variables for the messages
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  
    // If the age is less than 16, print belowSixteen message
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
  }

  // Exercise 3: Which Quadrant?
function whichQuadrant(x, y) {
    // Check if the point is on the x-axis or y-axis
    if (x === 0 && y !== 0) {
      console.log(`(${x}, ${y}) is on the y axis`);
    } else if (y === 0 && x !== 0) {
      console.log(`(${x}, ${y}) is on the x axis`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 4`);
    } else {
      console.log(`(${x}, ${y}) is at the origin`);
    }
  }

  // Exercise 4: What type of triangle?
function checkTriangleType(side1, side2, side3) {
    // Check if the sides form a valid triangle
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      return "Invalid triangle";
    }
  
    // Determine the type of triangle
    if (side1 === side2 && side2 === side3) {
      return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle";
    } else {
      return "Scalene triangle";
    }
  }
  