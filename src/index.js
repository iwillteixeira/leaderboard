import './scss/style.scss';
import Store from './modules/store.js';
import Additem from './modules/add.js';
import Refresh from './modules/refresh.js';
import RenderHtml from './modules/render.js';

document.addEventListener('DOMContentLoaded', () => {
  const storeUser = new Store();
  const addUsers = new Additem();
  const refreshItems = new Refresh();
  const render = new RenderHtml();
  storeUser.getData();
  addUsers.addEvent();
  refreshItems.refreshAll();
  render.showItems();
});