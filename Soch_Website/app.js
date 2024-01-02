let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn=document.querySelector('#new-Btn');
let message = document.querySelector('#msg');
let messageContainer=document.querySelector('.Message-Container');
let draw=document.querySelector(".draw");
let drawMessage = document.querySelector('#draw-mesg');
let drawBtn=document.querySelector('#draw-Btn');
let turn = true;
const win=[
    [0,1,2], 
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [2,5,8],
];
const resetGame=()=>{
    turn=true;
    enableCall();
    messageContainer.classList.add("hide");
    draw.classList.add("hide");
}
const enableCall=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledCall=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "O";
           
            turn=false;
            
        } else {
            box.innerText = "X";
            turn=true;
        } 
            box.disabled=true;
            checkWinner();
            checkDraw()
    });
});
const showWinner=(winner)=>{
    message.innerText=`Congratulation, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disabledCall();
    
}
const showDraw = () => {
    drawBtn.addEventListener("click", resetGame);
    draw.classList.remove("hide");
    drawMessage.innerText="Game is draw";
    
   
};

const checkDraw = () => {
    const allBoxesFilled = [...boxes].every(box => box.innerText.trim() !== "");
    if (allBoxesFilled) {
        showDraw();
    }
};
const checkWinner = ()=>{
    for (let pattern of win){
       let position1=boxes[pattern[0]].innerText; 
       let position2=boxes[pattern[1]].innerText; 
       let position3=boxes[pattern[2]].innerText;
       if(position1!=""&&position2!=""&&position3!=""){
        if(position1===position2 && position2===position3){
                showWinner(position1);
              
        }}};
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
