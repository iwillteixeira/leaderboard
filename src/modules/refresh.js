import Store from './store.js';

export default class Refresh {
  constructor() {
    this.store = new Store();
    this.refreshBtn = document.querySelector('.refresh-btn');
  }

    refreshAll = async () => {
      this.refreshBtn.addEventListener('click', () => {

      });
    }
}