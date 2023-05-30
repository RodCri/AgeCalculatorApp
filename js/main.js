// INPUTS
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
// ERRORS
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const erroYear = document.querySelector('.error-year');
const error = document.querySelector('.error');
const calculate = document.querySelector('.cta');
// OUTPUTS
const years = document.querySelector('#years');
const months = document.querySelector('#months');
const days = document.querySelector('#days');

calculate.addEventListener('click', handleSubmit);

const date = new Date();
let dayA = date.getDate();
let monthA = 1 + date.getMonth();
let yearA = date.getFullYear();

const yu = document.querySelectorAll('.date');
const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll(".input__date");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.nextElementSibling;
    if (!i.value) {
      console.log(!i.value)
      i.style.borderColor = "#ff5757";
      parent.innerText = "this field is required";
      validator = false;
    } else if (day.value === '') {
      i.style.borderColor = "#ff5757";
      parent.innerText = "this field is required";
      validator = false;
    } else if (month.value > 12) {
      month.style.borderColor = "#ff5757";
      month.nextElementSibling.innerText = "Must be a valid month.";
      validator = false;
    } else if (day.value > 31) {
      day.style.borderColor = "#ff5757";
      day.nextElementSibling.innerText = "Must be a valid day";
      validator = false;
    } else if (year.value > yearA) {
      year.style.borderColor = "#ff5757";
      year.nextElementSibling.innerText = "The year is in the future"
      validator = false;
    } else {
      i.style.borderColor = "#141414";
      i.style.color = "#141414";
      parent.innerText = "";
      validator = true;
    }
  })
  return validator
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (day.value > dayA) {
      dayA = dayA + months[monthA - 1];
      monthA;
    }
    if (month.value > monthA) {
      monthA = monthA + 12;
      yearA = yearA - 1;
    }
    const d = dayA - day.value;
    const m = monthA - month.value;
    const y = yearA - year.value;

    days.innerHTML = d;
    months.innerHTML = m;
    years.innerHTML = y;

  }
}
