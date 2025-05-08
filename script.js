let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comp = document.querySelector("#comp");

const userpara = document.querySelector("#user_score");
const comppara = document.querySelector("#comp_score");

const comp_choice = () => {
    const options = ["rock", "paper", "scissors"];
    const random_idx = Math.floor(Math.random()*3);
    return options[random_idx];
}
const drawGame = () =>{
    console.log("Game is draw");
    msg.innerText = "Draw! Play again";
    msg.style.backgrounColor = "#081b31"; 
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userpara.innerText = userScore;
        msg.innerText = "You looks safe";
        msg.style.backgroundColor = "green"; 
    }else{
        compScore++;
        comppara.innerText = compScore;
        console.log("You lost!");
        msg.innerText = "hurry up! computer got a point";
        msg.style.backgroundColor = "red"; 
    }
}
const playGame = (user_id) =>{
    console.log("user choice = ", user_id);
    //generate computer choice
    const compChoice = comp_choice();
    console.log("coputer choice = ", compChoice);
    comp.innerText = `Computer choice is ${compChoice}`;

    if(user_id === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(user_id === "rock"){
            userWin = compChoice === "paper" ? false: true;
        }else if(user_id === "paper"){
            userWin = compChoice === "rock" ? true: false;
        }else{
            userWin = compChoice === "rock"? false: true;
        }
    showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click", ()=>{
        let user_id=choice.getAttribute("id");
        console.log("choice was clicked",user_id);
        playGame(user_id);
    });
});