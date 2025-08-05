const screen = document.getElementById('screen');
const colorButtons = document.querySelectorAll('.color-button');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.dataset.color;
    screen.classList.remove('blue', 'yellow', 'red', 'green', 'violet', 'grey');
    screen.classList.add(color);
  });
});