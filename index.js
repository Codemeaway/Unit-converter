/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let massEl = document.getElementById("mass-el");
let volumEl = document.getElementById("volum-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
const feetToMeter = 0.3048;
const gallonToLiter = 3.7854;
const poundToKilo = 0.4535;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet 
    | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`;
});

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  volumEl.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons
    | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`;
});

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kiloToPound
  ).toFixed(3)} pounds
    | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`;
});

inputEl.onfocus = function () {
  this.value = "";
};
