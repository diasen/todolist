import addingHtmlToTheDom from './libs/createHTML.js';
import { validateInputLength } from './libs/inputValidation.js';

let listArray = [];

const listInput = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
  listArray.push(listInput.value);
  console.log(listInput.value);
  if (validateInputLength(listInput.value, 3)) {
    document.querySelector('.item__list').innerHTML += listInput.value;
    console.log('Pass');
  } else {
    console.log('Failed');
  }
};
