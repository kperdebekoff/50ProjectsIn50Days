const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(panels);
    panel.classList.add('panel--active');
  });
});

function removeActiveClasses(imgPanels) {
  imgPanels.forEach((panel) => {
    panel.classList.remove('panel--active');
  });
}
