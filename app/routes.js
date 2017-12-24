import roadtrip from 'roadtrip';
import IndexHandler from './pages/index/index.handler';

export default class Routes {
  constructor() {
    this.router = roadtrip;
    this.init();
  }

  init() {
    this.index_handler = new IndexHandler();

    this.router
      .add('/', this.index_handler.route)
      .start({
        fallback: '/'
      });
  }
}