import Store from './store.js';

export default class Additem {
  constructor() {
    this.store = new Store();
    this.button = document.querySelector('form button');
  }

  addItem = () => {
    this.user = document.querySelector('#name').value;
    this.score = document.querySelector('#score').value;
    if (this.user && this.score) {
      document.querySelector('#name').value = '';
      document.querySelector('#score').value = '';
      return this.store.addNew(this.user, this.score);
    }
    return null;
  }

  addEvent = () => {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.addItem();
    });
  }
}