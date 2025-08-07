const turnIndicator = document.getElementById("turnIndicator");

const X_class="x";
const o_class="o";
const winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElemnts=document.querySelectorAll("[data-cell]");
const board=document.getElementById("board");
const winningMessageElemnt=document.getElementById("winning")
const restart=document.getElementById("restartButton")
const winningMessageTextElemnt=document.querySelector("[data-winning-message]")
let circleTurn 
function startGame(){
    circleTurn=false;
    cellElemnts.forEach(cell=>{
    cell.addEventListener("click",handleClick,{once:true})
    updateTurnIndicator();

})
}
restart.addEventListener("click",function(){
    location.reload()
})

function handleClick(e){
    const cell=e.target;
    const currentClass=circleTurn? o_class:X_class;
    placeMark(cell,currentClass)
    //check for win
    if (checkWin(currentClass)){
        endGame()
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurns();
        updateTurnIndicator();
        
    }
    //check for draw
    //switch turns
 
}
function endGame(draw){
    if (draw){
        winningMessageTextElemnt.innerHTML=`Draw `
    }else {
        winningMessageTextElemnt.innerHTML=`${circleTurn?"O":"X"} wins!!!`
    }
    winningMessageElemnt.classList.add("show")

}
function isDraw(){
    return [...cellElemnts].every(cell=>{
        return cell.classList.contains(X_class)||cell.classList.contains(o_class)
    })
}
function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}
function swapTurns(){
circleTurn=!circleTurn
}
startGame()
function checkWin(currentClass){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElemnts[index].classList.contains(currentClass);
        });
    });
}
function updateTurnIndicator() {
    turnIndicator.innerText = `${circleTurn ? "O's" : "X's"} Turn`;
}
let own = document.getElementById("own");

own.addEventListener("click", function() {
  window.open("https://www.instagram.com/yousif_kawa_/", "_blank"); 
});

