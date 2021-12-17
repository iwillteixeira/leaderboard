import Store from './store.js';

export default class RenderHtml {
  constructor() {
    this.store = new Store();
    this.wrapItems = document.querySelector('.list-score');
  }

    showItems = async () => {
      this.data = await this.store.getData()
        .then(
          this.wrapItems.innerHTML = `<div class="spinner-grow d-flex loading" role="status">
                <span class="">Loading...</span>
              </div>`,

        );
      this.wrapItems.innerHTML = '';
      this.data.forEach((element) => {
        this.wrapItems.insertAdjacentHTML('beforeend',
          `<tr>
            <td>${element.user}</td>
            <td>${element.score}</td>
            </tr>`);
      });
    }
}