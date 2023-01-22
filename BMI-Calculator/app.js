const weightInput = document.querySelector("#weight-input");
const heightInput = document.querySelector("#height-input");
const calculateButton = document.querySelector("#btn-success");
const resetButton = document.querySelector("#btn-reset");

const bmiShow = document.querySelector("#dynamic__bmi");
const message = document.querySelector("#bmi_text");

const showMessage = (bmi) => {
  if (bmi < 16) {
    return "You are Severe thin!";
  } else if (bmi >= 16 && bmi < 17) {
    return "You are Moderate thin!";
  } else if (bmi >= 17 && bmi < 18.5) {
    return "You are Mild thin!";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "You are Normal!";
  } else if (bmi >= 25 && bmi < 30) {
    return "You are Overweight!";
  } else if (bmi >= 30 && bmi < 35) {
    return "You are Obese!";
  } else if (bmi >= 35 && bmi < 40) {
    return "You are Severely Obese!";
  } else if (bmi >= 40) {
    return "You are Morbidly Obese!";
  }
};

const calculateBMI = () => {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) * 0.3048;
  const bmi = weight / (height * height);

  bmiShow.textContent = bmi.toFixed(2);
  message.textContent = showMessage(bmi);
};

//console.log(showMessage(18.5));

const reset = () => {
  weightInput.value = "";
  heightInput.value = "";
  bmiShow.textContent = "";
  message.textContent = "";
};

const validator = () => {
  if (Number(weightInput.value) && Number(heightInput.value)) {
    calculateBMI();
  } else {
    alert("Please put valid input.");
    reset();
  }
};

calculateButton.addEventListener("click", validator);
resetButton.addEventListener("click", reset);
