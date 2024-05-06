const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

checkButton.addEventListener('click', function () {
  const number = numberInput.value.trim();

  if (!number) {
    result.textContent = 'Please enter a number!';
    result.classList.remove('hidden');
    result.classList.add('error');
    return;
  }
//const regex = /^\s*(?:[-+]?[0-9]+(?:\.[0-9]+)?(?:E[-+]?[0-9]+)?|[-+]?\.[0-9]+(?:e[-+]?[0-9]+)?)\s*(?:\*\s*10\^[0-9]+)?\s*$/;
const regex = /^[+-]?\d*\.\d+(e[+-]?\d+)$/i;
  if (regex.test(number)) {
    result.textContent = `${number}  is a scientific number :)`;
    result.classList.remove('hidden');
    result.classList.add('success');
  } else {
    result.textContent = `${number}  is not a scientific number :(`;
    result.classList.remove('hidden');
    result.classList.add('error');
  }
});
