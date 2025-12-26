let boxs = document.querySelectorAll(".btn");
let msg = document.querySelector(".msg");
let msgContainer = document.getElementById("123");
let resetbtn = document.querySelector(".resetbtn");
let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkDraw = () => {
    console.log("Match Draw");
    msgContainer.classList.remove('hide');
    msg.innerHTML = "Match was Drawn";
    resetbtn.innerHTML = "New Game"
}

const resetGame = () => {
    for(let i=0;i<9;i++){
        boxs[i].innerHTML = "";
        boxs[i].disabled = false;
    }
    msgContainer.classList.add("hide");
    resetbtn.innerHTML = "Reset Game"
    turn0 = true;
    count = 0;
}

boxs.forEach( (box) => {
    box.addEventListener("click",() => {
        if(turn0 == true){
            box.innerHTML = "X";
            turn0= false;
        }
        else{
            box.innerHTML= "O";
            turn0= true;
        }
        if(box.innerHTML!= ""){
            box.disabled= true;
        }
        count++;
        checkwinner();
    })
});

const checkwinner = () =>{
    let winnerfound = false;
    for (let pattern of winPattern) {
        let pos0 = boxs[pattern[0]].innerHTML;
        let pos1 = boxs[pattern[1]].innerHTML;
        let pos2 = boxs[pattern[2]].innerHTML;
        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0 === pos1 && pos1 === pos2){
                showWinner(pos0);
                winnerfound = true;
            }
        }
        if(count === 9 && winnerfound === false){
            checkDraw();
        }
    }
}

let showWinner = (winner) => {
    console.log("The Winner is " + winner);
    msgContainer.classList.remove('hide');
    msg.innerHTML = "Congratulation,Winner is " + winner;
    resetbtn.innerHTML = "New Game"
    for(let a =0;a<9;a++){
        boxs[a].disabled = true;
    }
}

resetbtn.addEventListener("click", resetGame);