# Coding challenge

## Description

A coding challenge to write a function named sum that returns the total of any number of parameters.

<br>

- [Deployed app URL](#Deployed-app-URL)

## Deployed app URL

https://mohamedzakigithub.github.io/sum-of-values/

## Code

```javascript
// Variables declarations and DOM elements selection.
var inputValuesEl = document.querySelector("#input");
var outputEl = document.querySelector("#result");
var buttonEl = document.querySelector("#button");

// Add click listener to button
buttonEl.addEventListener("click", function () {
  // split input values on commas and store in an array.
  inputArray = inputValuesEl.value.split(",");
  // get results and assign to output element
  result = sum(inputArray);
  outputEl.innerText = result;
});

// Function sum declaration
function sum(arr) {
  // parse input values to floating point, remove single quotes if present and check if value is a number
  parsedInputArray = arr.map((el) =>
    isNaN(parseFloat(el.replace("'", ""))) === false
      ? parseFloat(el.replace("'", ""))
      : 0
  );
  // return the sum of the array using the reduce method
  return Number(parsedInputArray.reduce((a, b) => a + b, 0).toFixed(2));
}
```
