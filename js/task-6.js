function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxesItems = [];
  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    let boxSize = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
  boxes.append(...boxesItems);
  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

destroyButton.addEventListener('click', destroyBoxes);

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
