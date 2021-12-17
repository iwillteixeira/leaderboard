import Store from './store';

export default class RenderHtml {
  constructor() {
    this.store = new Store();
    this.wrapItems = document.querySelector('.list-score');
  }

    showItems = async () => {
      this.data = await this.store.getData()
        .then(
          this.wrapItems.innerHTML = `<div class="spinner-grow position-absolute" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>`,

        );
      this.wrapItems.innerHTML = '';
      this.data.forEach((element) => {
        console.log(element);
      });
    }
}