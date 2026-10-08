 
let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let startAgain=document.querySelector("#start-again");

let messageContainer=document.querySelector(".message-container");


let message=document.querySelector("#message");

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
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.dispatchEvent;

  checkWinner();




  });

   
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 == position2 && position2 == position3) {


       displayWinner(position1);

      }
       
    }
  }
};

const displayWinner = (win)=>{
    message.innerText=` ---Congratulation , Winner is ${win}---`;
    messageContainer.classList.remove("hide");
     disableButton();
}

const disableButton = () =>{
    for(let box of boxes){
        box.disab
    }
}


const enableButton =() =>{
    for(box of boxes){
        boxes.ariaDisabled= false;
        boxes.innerText=";"
    }
}

const resetgame = ()=>{

    turnO=true;
    enableButton();
    messageContainer.classList.add("hide");
    
}


startAgain.addEventListener("click" , resetgame());
reset.addEventListener("click" , resetgame());


 
