let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let startAgain = document.querySelector("#startAgain");
let draw = document.querySelector("#draw");

let messageContainer = document.querySelector(".message-container");

let drawMessageContainer = document.querySelector(".drawHide");

let winnerMessage = document.querySelector("#winnerMessage");
let drawMessage = document.querySelector("#drawMessage");

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.disabled = true;
      turnO = false;
    } else {
      box.innerText = "X";
      box.disabled = true;
      turnO = true;
    }

    box.dispatchEvent;

    checkWinner();
  });
});
displayDraw();

 const checkWinner = () => {
  for (let pattern of winPattern) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 == position2 && position2 == position3) {
        displayWinner(position1);

         iswinner = true;
         
      }

    }

     
  }
  if (!iswinner) {
      displayDraw();
    }
 
};

 

let iswinner = false;
const displayWinner = (win) => {
  winnerMessage.innerText = ` ---Congratulation , Winner is ${win}---`;
  winnerMessage.classList.remove("hide");
  disableButton();
  
    
};

const displayDraw = () => {
  drawMessage.innerText = "--- Game Draw (No winner)---";
  drawMessage.classList.remove("hide");
};

const disableButton = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableButton = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetgame = () => {
  turnO = true;
  enableButton();
  messageContainer.classList.add("hide");
};

const drawResetgame = () => {
  turnO = true;
  enableButton();
  drawMessageContainer.classList.add("hide");
};

startAgain.addEventListener("click", resetgame());
reset.addEventListener("click", resetgame());
draw.addEventListener("click", drawResetgame());
