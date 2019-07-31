const renderElem = ({tagName, attrs, children}) => {
  
  console.log('renderElem: %o',arguments)
  // create the element
  //   e.g. <div></div>
  const $el = document.createElement(tagName);

  // add all attributes as specified in attrs
  //   e.g. <div id="app"></div>
  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  // append all children as specified in children
  //   e.g. <div id="app"><img></div>
  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
};

const render = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  // we assume everything else to be a virtual element
  return renderElem(vNode);
};

export default render;