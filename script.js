const leftDoor = document.getElementById('leftDoor');
const rightDoor = document.getElementById('rightDoor');
const letter = document.getElementById('letter');
const closeBtn = document.getElementById('closeBtn');

let isOpen = false;

function toggleDoors() {
  isOpen = !isOpen;

  if (isOpen) {
    leftDoor.classList.add('open');
    rightDoor.classList.add('open');
    letter.classList.add('open');
  } else {
    leftDoor.classList.remove('open');
    rightDoor.classList.remove('open');
    letter.classList.remove('open');
  }
}

leftDoor.addEventListener('click', toggleDoors);
rightDoor.addEventListener('click', toggleDoors);
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDoors();
});
