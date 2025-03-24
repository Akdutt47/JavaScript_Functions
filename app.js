console.log("Hello World!\n==========\n");

// Exercise 1: Print Odds Continued
function printOdds(count) {
    if (typeof count !== "number") {
        console.log("Please enter a valid number.");
        return;
    }

    if (count < 0) {
        console.log("Negative count detected. Counting in reverse.");
    }

    for (let i = 1; Math.abs(i) <= Math.abs(count); i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

console.log("Exercise 1: Print Odds");
printOdds(10);
printOdds(-5);
printOdds(15);
console.log("\n");




// Exercise 2: Legal?
function checkAge(userName = "Guest", age) {
    if (age === undefined || typeof age !== "number") {
        console.log("Please provide a valid age.");
        return;
    }

    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
console.log("Exercise 2: Legal?");
checkAge("Alice", 18);
checkAge("Bob", 14);
checkAge(); // Missing parameters test
console.log("\n");



// Exercise 3: Which Quadrant?
function findQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

console.log("Exercise 3: Which Quadrant?");
findQuadrant(0, 2);
findQuadrant(1, 2);
findQuadrant(-6, 18);
findQuadrant(0, 0);
findQuadrant(-3, -7);
findQuadrant(5, -2);
console.log("\n");



  // Exercise 4: What type of triangle?
function triangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";
    } else if (a === b && b === c) {
        return "Equilateral triangle";
    } else if (a === b || a === c || b === c) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

console.log("Exercise 4: What Type of Triangle?");
console.log(triangleType(1, 2, 2)); // Isosceles
console.log(triangleType(1, 1, 2)); // Invalid
console.log(triangleType(3, 3, 3)); // Equilateral
console.log(triangleType(5, 6, 7)); // Scalene
console.log("\n");

function dataPlanStatus(planLimit, day, usage) {
    if (day < 1 || day > 30 || usage < 0 || planLimit <= 0) {
        console.log("Invalid input values. Please enter valid numbers.");
        return;
    }

    let daysRemaining = 30 - day;
    let averageDailyUse = usage / day;
    let projectedUsage = averageDailyUse * 30;
    let remainingData = planLimit - usage;
    let remainingDailyAllowance = remainingData / daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining.`);
    console.log(`Average daily use: ${averageDailyUse.toFixed(2)} GB/day.`);

    if (projectedUsage > planLimit) {
        console.log(`You are exceeding your data plan! Reduce your daily usage to ${remainingDailyAllowance.toFixed(2)} GB/day.`);
    } else if (projectedUsage < planLimit) {
        console.log(`You are under your data limit. You can use up to ${remainingDailyAllowance.toFixed(2)} GB/day.`);
    } else {
        console.log("You are exactly on track with your data plan.");
    }
}
console.log("Bonus Exercise 5: Data Plan Status");
dataPlanStatus(100, 15, 56);
dataPlanStatus(50, 20, 30);
dataPlanStatus(200, 10, 50);
dataPlanStatus(10, 5, 10); // Edge case test
console.log("\n");

