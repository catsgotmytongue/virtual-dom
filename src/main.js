// article originally at https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#background-what-is-virtual-dom
import createElement from './createElement';
import render from './render';
import mount from './mount';

const vApp = createElement('div', {
    attrs: {
      id: 'app'
    },
    children: [
        'Hello!',
        createElement('img', {
          attrs: {
            src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'
          }
        })
    ]
  });

const $app = render(vApp);
console.log(vApp);
mount($app, document.getElementById('app'))