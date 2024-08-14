let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // col 1
    [1, 4, 7], // col 2
    [2, 5, 8], // col 3
    [0, 4, 8], // diag 1
    [2, 4, 6] // diag 2
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText = "0";
            turn0 = false;
            count++;
        }
        else{
            box.innerText = "X";
            turn0 = true;
            count++;
        }
        box.disabled = true;
        let iswinner = checkWinner();

        if(count == 9 && !iswinner){
            gameDraw()
        }
    })
});

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

const gameDraw = () => {
    msgContainer.classList.remove("hide") ;
    msg.innerText = `Game Draw`;
    disabledBox();
}

const disabledBox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        box1 = boxes[pattern[0]].innerText;
        box2 = boxes[pattern[1]].innerText;
        box3 = boxes[pattern[2]].innerText;

        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 == box2 && box2 == box3){
                console.log("Winner");
                showWinner(box1)
                return true
            }
        }
    })
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide") ;
    msg.innerText = `Congratulations!! ${winner} is the winner`;
    disabledBox();
}

resetBtn.addEventListener("click", () => {
    enableBoxes();
    msgContainer.classList.add("hide") ;
    turn0 = true;
    count = 0;
})

newGameBtn.addEventListener("click", () => {
    enableBoxes();
    msgContainer.classList.add("hide") ;
    turn0 = true;
    count = 0;
})