
function switchSrc(element, newSrc) {
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.src = newSrc + '.glb';
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('selected'));
    element.classList.add('selected'); 
  }
