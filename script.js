const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.textContent = "Yay!!! Can't wait to celebrate Valentine day with my princess!!! 💖";
  noButton.style.display = "none"; // Hide the "No" button
});

noButton.addEventListener('click', () => {
  // Move the "No" button to a random position within the container
  const buttonsContainer = noButton.parentElement;
  const containerRect = buttonsContainer.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
});