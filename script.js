inputValuesEl = document.querySelector("#input");
outputEl = document.querySelector("#result");
buttonEl = document.querySelector("#button");

buttonEl.addEventListener("click", function () {
  inputArray = inputValuesEl.value.split(",");
  result = sum(inputArray);
  outputEl.innerText = result;
});

function sum(arr) {
  parsedInputArray = arr.map((el) =>
    isNaN(parseFloat(el.replace("'", ""))) === false
      ? parseFloat(el.replace("'", ""))
      : 0
  );
  console.log(parsedInputArray);
  return Number(parsedInputArray.reduce((a, b) => a + b, 0).toFixed(2));
}
