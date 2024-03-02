const player = document.getElementById('player');
const home = document.getElementById('home');
const message = document.getElementById('message');

let canMove = true;

document.addEventListener('keydown', (e) => {
  if (canMove && e.key === 'd') {
    movePlayer();
  }
});

function movePlayer() {
  const currentLeft = parseInt(player.style.left) || 0;
  player.style.left = `${currentLeft + 10}px`;

  if (isColliding(player, home) && canMove) {
    canMove = false;
    showMessage("дай еще поспать 5 минуточек");
    setTimeout(() => {
      hideMessage();
      showMessage("Ну ладно,ладно!! пойдем тогда ");
      setTimeout(() => {
        hideMessage();
        // Переход ко 4 этапу
        window.location.href = 'fourth_stage.html';
      }, 3000);
    }, 3000);
  }
}

function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  return !(rect1.right < rect2.left || rect1.left > rect2.right);
}

function hideMessage() {
  message.style.display = 'none';
}

function showMessage(text) {
  message.textContent = text;
  message.style.display = 'block';
  message.classList.remove('hidden');
}
