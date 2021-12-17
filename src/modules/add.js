import Store from './store.js';
import RenderHtml from './render.js';

export default class Additem {
  constructor() {
    this.store = new Store();
    this.button = document.querySelector('form button');
    this.render = new RenderHtml();
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
      this.render.showItems();
    });
  }
}