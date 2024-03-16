/* Array */

/* 1. Declare an empty array using JS literal notation to store
student names in future. */
var studentsName = [];
document.write(studentsName);

/* 2. Declare an empty array using JS object notation to store
student names in future. */

var studentNamesObject = {
  students: [],
};

/* 3. Declare and initialize a strings array. */

var fruits = ["mango", "apple", "grapes"];

/*  4. Declare and initialize a numbers array. */

var evenNumbers = [2, 4, 6, 8, 10];

/* 5. Declare and initialize a boolean array. */

var booleanArray = [true, false, false, true];

/* 6. Declare and initialize a mixed array. */

var Student1Detail = ["Asheel", 18, true];

/* 7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). */

var qualifications = [
  "SSC",
  "HSC",
  "BSC",
  "BS",
  "BCOM",
  "MS",
  "M. Phill.",
  "PhD",
];

document.getElementById("task-7").addEventListener("click", function () {
  for (let i = 0; i < qualifications.length; i++) {
    document.write(`<h3> ${i + 1}) ${qualifications[i]} </h3>`);
  }
});

/* 8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, */

document.getElementById("task-8").addEventListener("click", function () {
  var studentsName = ["Asheel", "Ahmed", "Ubaid"];
  var studentsScore = [450, 350, 286];

  for (let i = 0; i < studentsName.length || i < studentsScore.length; i++) {
    document.write(
      `<h3>Score of ${studentsName[i]} is ${studentsScore[i]}. Percentage ${
        (studentsScore[i] / 500) * 100
      } </h3>`
    );
  }
});

/* 9. Initialize an array with color names. Display the array
elements in your browser.
*/
var num = 0;
document.getElementById("task-9").addEventListener("click", function () {
  var colors = ["Red", "Green", "Blue"];
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  /* a. Ask the user what color he/she wants to add to the
  beginning & add that color to the beginning of the array.
  Display the updated array in your browser. */
  var userColor = prompt("Enter your fav color");
  colors.unshift(userColor);
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  /* b. Ask the user what color he/she wants to add to the end
  & add that color to the end of the array. Display the
  updated array in your browser. */
  var userColor = prompt("Enter your fav color");
  colors.push(userColor);
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  // c. Add two more colors to the beginning
  colors.unshift("Yellow", "Orange");
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  /* d. Delete the first color in the array. Display the updated
  array in your browser. */
  colors.shift();
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  /* e. Delete the last color in the array. Display the updated
  array in your browser. */
  colors.pop();
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  /* f. Ask the user at which index he/she wants to add a color
  & color name. Then add the color to desired
  position/index. . Display the updated array in your
  browser. */
  var indexToAddColor = prompt(
    "Enter the index where you want to add a color:"
  );
  var colorToAdd = prompt("Enter the color to add:");
  colors.splice(indexToAddColor, 0, colorToAdd);
  document.write(`<h4>${num++ + 1} ${colors}</h4>`);

  // g. Ask the user at which index to delete color(s) and how many colors to delete
  var indexToDelete = prompt(
    "Enter the index from where you want to delete color(s):"
  );
  var numberOfColorsToDelete = prompt(
    "Enter the number of colors you want to delete:"
  );
  colors.splice(indexToDelete, numberOfColorsToDelete);

  document.write(`<h4>${num++ + 1} ${colors}</h4>`);
});

/* 10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method. */

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.getElementById("task-11").addEventListener("click", function () {
  document.write(`Cities List: <br> ${cities} <br>`);
  document.write(`Selected Cities List: <br> ${cities.splice(2, 2)}`);
});

/* 12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */

var arr = ["This", "is", "my", "cat"];

document.getElementById("task-12").addEventListener("click", function () {
  document.write(`Array: <br> ${arr} <br>`);
  document.write(`String: <br> ${arr.join(" ")} <br></br>`);
});

/* 13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out) */

var hardDevices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.getElementById("task-13").addEventListener("click", function () {
  document.write(`Devices: <br> ${hardDevices} <br><br>`);
  document.write(
    `Out: <br> ${hardDevices[0]} <br> Out: <br> ${hardDevices[1]} <br> Out: <br> ${hardDevices[2]} <br> Out: <br> ${hardDevices[3]}`
  );
});

/* 14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-
First Out) */

document.getElementById("task-14").addEventListener("click", function () {
  document.write(`Devices: <br> ${hardDevices} <br><br>`);
  document.write(
    `Out: <br> ${hardDevices[3]} <br> Out: <br> ${hardDevices[2]} <br> Out: <br> ${hardDevices[1]} <br> Out: <br> ${hardDevices[0]}`
  );
});

/* 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.getElementById("task-15").addEventListener("click", function () {
  document.write(`
  <select>
  <option>${manufacturers[0]}</option>
  <option>${manufacturers[1]}</option>
  <option>${manufacturers[2]}</option>
  <option>${manufacturers[3]}</option>
  <option>${manufacturers[4]}</option>
  <option>${manufacturers[5]}</option>
  </select>
  `);
});
