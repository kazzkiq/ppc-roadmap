import Index from './index.page';

export default class IndexHandler {
  get route() {
    return {
      enter(current, previous) {
        this.component = new Index({
          target: document.getElementById('app'),
          data: {
            timeline: []
          }
        });
        console.log('Entered index!');
        getData().then((result) => {
          const data = result.data.repository.tags.edges.reverse();
          console.log(data);
          this.component.set({
            timeline: data
          }); 
        });
      },
      leave(current, previous) {
        this.component.destroy();
        console.log('Left index!');
      }
    }
  }
}

function getData() {
  return new Promise((resolve, reject) => {
    fetch('/data.json')
    .then((result) => {
      resolve(result.json());
    })
    .catch((err) => {
      reject(err);
    });
  });
}