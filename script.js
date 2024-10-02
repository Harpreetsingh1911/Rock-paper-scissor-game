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
const iconList = [rock, paper, secissor];
function calculateResult(userChoise, computerChoice) {
  UserhandIcon.innerText = "🤜";
  computerhandIcon.innerText = "🤛";
  UserhandIcon.classList.add("shakeUserHands");
  computerhandIcon.classList.add("shakeComputerHands");

  setTimeout(() => {
    UserhandIcon.classList.remove("shakeUserHands");
    computerhandIcon.classList.remove("shakeComputerHands");

    UserhandIcon.innerText = userChoise;
    const computerchoiseIndex = Math.floor(Math.random() * 3);
    const computerHand = iconList[computerchoiseIndex];
    computerhandIcon.innerText = computerHand;

    if (userChoise === computerHand) {
      result.innerText = "Draw";
    } else if (computerHand === computerChoice) {
      result.innerText = "Computer Win";
      ComputerScore.innerText = +ComputerScore.innerText + 1;
    } else {
      result.innerText = "User Win";
      userScore.innerText = +userScore.innerText + 1;
    }
  }, 2000);
}
rockbtn.addEventListener("click", function () {
  calculateResult(rock, paper);
});

paperbtn.addEventListener("click", function () {
  calculateResult(paper, secissor);
});

secissorbtn.addEventListener("click", function () {
  calculateResult(secissor, rock);
});
