let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let XTurn = "true";
let winner = document.querySelector(".winner");
let winBox = document.querySelector(".winBox");
let count = 0;
const winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,8],
    [0,4,8],
    [2,4,6]
]
const disabAndWinner = (p1) => {
    boxes.forEach((box) => {
        box.disabled = "true";
    })
    winner.innerText = `Winner is ${p1}`;
    }
boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        count++;
        if(XTurn == "true"){
            box.innerText = "O";
            XTurn = "false";
            box.style.color = "#ffffff";
        }else{
            box.innerText = "X";
            XTurn = "true";
        }
        box.disabled = "true";
        checkWinner();
        if(count==9){
            winner.innerText = "Game is draw!!!!!";
        }
    })
})
const checkWinner = () => {
    for(let pattern of winning_patterns){
            let p1 = boxes[pattern[0]].innerText;
            let p2 = boxes[pattern[1]].innerText;
            let p3 = boxes[pattern[2]].innerText;
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log("winner is : ", p1);
                disabAndWinner(p1);
                count--;
            }
        }
    }
}
reset.addEventListener("click", () => {
    window.location.reload();
})
