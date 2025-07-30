import { add, subtract, multiply, divide } from './mathFunctions.js';
import render from './renderFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const resultDiv = document.getElementById('result');

  const getValues = () => {
    return [parseFloat(input1.value), parseFloat(input2.value)];
  };

  document.getElementById('addBtn').addEventListener('click', () => {
    const [a, b] = getValues();
    render(resultDiv, add(a, b));
  });

  document.getElementById('subBtn').addEventListener('click', () => {
    const [a, b] = getValues();
    render(resultDiv, subtract(a, b));
  });

  document.getElementById('mulBtn').addEventListener('click', () => {
    const [a, b] = getValues();
    render(resultDiv, multiply(a, b));
  });

  document.getElementById('divBtn').addEventListener('click', () => {
    const [a, b] = getValues();
    render(resultDiv, divide(a, b));
  });
});
