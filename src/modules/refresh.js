import Store from './store.js';
import RenderHtml from './render.js';

export default class Refresh {
  constructor() {
    this.store = new Store();
    this.refreshBtn = document.querySelector('.refresh-btn');
    this.render = new RenderHtml();
  }

    refreshAll = async () => {
      this.refreshBtn.addEventListener('click', () => {
        this.render.showItems();
      });
    }
}