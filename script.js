const rockbtn = document.querySelector(".rock-btn");
const paperbtn = document.querySelector(".paper-btn");
const secissorbtn = document.querySelector(".scissors-btn");
const UserhandIcon = document.querySelector(".user.hand-icon");
const computerhandIcon = document.querySelector(".computer.hand-icon");
const userScore = document.querySelector(".user-score");
const ComputerScore = document.querySelector(".computer-score");

let result = document.querySelector(".result");

const rock = "✊";
const paper = "🤚";
const secissor = "✌️";

rockbtn.addEventListener("click", function () {
  UserhandIcon.innerText = "🤜";
  computerhandIcon.innerText = "🤛";
  UserhandIcon.classList.add("shakeUserHands");
  computerhandIcon.classList.add("shakeComputerHands");
  setTimeout(() => {
    UserhandIcon.classList.remove("shakeUserHands");
    computerhandIcon.classList.remove("shakeComputerHands");
    UserhandIcon.innerText = rock;
    const computerchoise = Math.floor(Math.random() * 3);
    if (computerchoise == 0) {
      computerhandIcon.innerText = rock;
      result.innerText = "Draw";
    } else if (computerchoise == 1) {
      computerhandIcon.innerText = paper;
      result.innerText = "Computer Win";
      ComputerScore.innerText = +ComputerScore.innerText + 1;
    } else {
      computerhandIcon.innerText = secissor;
      result.innerText = "User Win";
      userScore.innerText = +userScore.innerText + 1;
    }
  }, 2000);
});

paperbtn.addEventListener("click", function () {
  UserhandIcon.innerText = "🤜";
  computerhandIcon.innerText = "🤛";
  UserhandIcon.classList.add("shakeUserHands");
  computerhandIcon.classList.add("shakeComputerHands");
  setTimeout(() => {
    UserhandIcon.classList.remove("shakeUserHands");
    computerhandIcon.classList.remove("shakeComputerHands");
    UserhandIcon.innerText = paper;
    const computerchoise = Math.floor(Math.random() * 3);
    if (computerchoise == 0) {
      computerhandIcon.innerText = rock;
      result.innerText = "user win";
      userScore.innerText = +userScore.innerText + 1;
    } else if (computerchoise == 1) {
      computerhandIcon.innerText = paper;
      result.innerText = "Draw";
    } else {
      computerhandIcon.innerText = secissor;
      result.innerText = "computer win";
      ComputerScore.innerText = +ComputerScore.innerText + 1;
    }
  }, 2000);
});

secissorbtn.addEventListener("click", function () {
  UserhandIcon.innerText = "🤜";
  computerhandIcon.innerText = "🤛";
  UserhandIcon.classList.add("shakeUserHands");
  computerhandIcon.classList.add("shakeComputerHands");
  setTimeout(() => {
    UserhandIcon.classList.remove("shakeUserHands");
    computerhandIcon.classList.remove("shakeComputerHands");
    UserhandIcon.innerText = secissor;
    const computerchoise = Math.floor(Math.random() * 3);
    if (computerchoise == 0) {
      computerhandIcon.innerText = rock;
      result.innerText = "computer win";
      ComputerScore.innerText = +ComputerScore.innerText + 1;
    } else if (computerchoise == 1) {
      computerhandIcon.innerText = paper;
      userScore.innerText = +userScore.innerText + 1;
      result.innerText = "user win";
    } else {
      computerhandIcon.innerText = secissor;
      result.innerText = "Draw";
    }
  }, 2000);
});
