const numInput = document.querySelector("#numInput");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");
const checkArmIfStrong = numInput => {
  let inputCache = numInput.value;
  let arrayOfIndividualValues = [];
  //populate the arrayOfIndividualValues with each number of the input value
  for (let i in inputCache) {
    arrayOfIndividualValues.push(inputCache[i]);
  }
  //make a new array of the cube of each item in arrayOfIndividualValues
  let armTest = arrayOfIndividualValues.map(x => {
    return x ** 3;
  });
  //get the sum
  let sumArmTest = armTest.reduce((a, b) => {
    return a + b;
  });
  let numInputCache = Number(inputCache);
  if (sumArmTest === numInputCache) {
    return "true";
  } else {
    return "false";
  }
};
btn.addEventListener(
  "mouseover",
  function (e) {
    e.preventDefault();
    const enteredNumber = numInput.value;
    if (!(numInput.value.length == 3 && Number(enteredNumber))) {
      btn.setAttribute("disabled", "disabled");
      result.innerHTML =
        "<strong>Tip:</strong> Enter a valid three digit number";
    }
  },
  false
);

numInput.addEventListener(
  "change",
  function () {
    btn.removeAttribute("disabled", "disabled");
    result.innerHTML = "";
  },
  false
);

btn.addEventListener(
  "click",
  function () {
    const enteredNumber = numInput.value;
    if (checkArmIfStrong(numInput) == "true") {
      result.innerHTML = `<p> ${Number(
        enteredNumber
      )} is an ArmStrong Number</p>`;
    } else {
      result.innerHTML = `<p> ${Number(
        enteredNumber
      )} is NOT an ArmStrong Number</p>`;
    }
  },
  false
);
