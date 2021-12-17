import './scss/style.scss';
import { submitBtn } from './modules/domselector.js';

document.addEventListener('DOMContentLoaded', () => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
  });
});