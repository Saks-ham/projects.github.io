let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let newBtn=document.querySelector(".newGame");
let winner=document.querySelector(".winner");
let winBox=document.querySelector(".winnerBox");
let turnO=true;
var count=0;
const disable=()=>{
    winBox.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
}}
const enable=()=>{
    winBox.classList.remove("hide");
    for(let box of boxes){
        box.disabled=false;
}}
resetBtn.addEventListener("click",()=>{
    enable();
    winBox.classList.add("hide");
    for(let box of boxes){
        box.innerText=" ";
}})
newBtn.addEventListener("click",()=>{
    enable();
    winBox.classList.add("hide");
    for(let box of boxes){
        box.innerText=" ";
}})
const checkWin=()=>{
    if(count===9){
            resetBtn.addEventListener("click",()=>{
                count=0;
            })
            newBtn.addEventListener("click",()=>{
                count=0;
            })
            winner.innerText="DRAW";
            disable();
        }
    for(let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                winner.innerText=`CONGRATULATIONS! PLAYER '${pos1}' IS THE WINNER!`;
                disable();
            }
        }
}}
const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        checkWin();
        box.disabled=true;
    })
})