function addBlock( content, target, position = 'beforeend') {
  const targetElement = document.querySelector(target);

  if (content instanceof HTMLElement) {
    targetElement.insertAdjacentElement(position, content);
  }else if(typeof content ==='string' && content.startsWith('<') && content.endsWith('>')){
    targetElement.insertAdjacentHTML(position, content);
  } else{
    console.error('Formatos válidos: string o elementos HTML y posiciones válidas: beforebegin, afterbegin, beforeend, afterend');
  }
}

export default addBlock;
// addBlock('<h1>Hello</h1>', '#app');
// addBlock('<h1>Hello</h1>', '#app', 'afterbegin');
// addBlock('<h1>Hello</h1>', '#app', 'beforeend');