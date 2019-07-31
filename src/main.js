import createElement from './createElement';
import render from './render';
import mount from './mount';
import diff from './diff';

const renderImg = count => (
  <img src={`https://placehold.it/${count*10}`}></img>
);

/** @jsx createElement */
const renderApp = count => {
  let imgs = [...Array.from({ length: count }, renderImg) ];
  console.log("IMGS: %o",imgs)
  return (
    <div id="app" datacount = {count}>
    Hello, the current count is {String(count)}
      {imgs}
    </div>
  );
}

const createVApp = count => createElement('div',{
  attrs: {
    id: 'app',
    dataCount: count, // we use the count here
  },
  children: [
    'The current count is: ',
    String(count), // and here
    ...Array.from({ length: count }, () => createElement('img', {
      attrs: {
        src: 'https://placehold.it/'+(count*10),
      },
    })),
  ],
});

let vApp = renderApp(0);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('app'));


let lastupdateTime = 0;
let animationFrameId = requestAnimationFrame(update)

function update(currentTimestamp) {
  
  if(currentTimestamp - lastupdateTime >= 1000) {
    lastupdateTime = currentTimestamp
    
    const n = Math.floor(Math.random() * 10);
    const vNewApp = renderApp(n);
    const patch = diff(vApp, vNewApp);

    // we might replace the whole $rootEl,
    // so we want the patch will return the new $rootEl
    $rootEl = patch($rootEl);
    //let t = renderRestaurantCard();
    vApp = vNewApp;
  }
  
  cancelAnimationFrame(animationFrameId)
  animationFrameId = requestAnimationFrame(update);
}

/** @jsx createElement **/
export const renderRestaurantCard = () => {
  
  return (
  <li>
    <a href="#" >Made in JSX</a>
  </li>
  );
};