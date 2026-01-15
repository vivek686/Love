let messages = [
  "No 😢",
  "Are you sure?",
  "Please 🥺",
  "Think again 💔",
  "Don't break my heart 😭"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  let currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}