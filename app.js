let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");
const reset=document.querySelector("#reset");

const gencompchoice= ()=>{
    const options=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3)
    return options[randindx]
};

const drawGame =()=>{
    msg.innerText="Game was draw. play again!";
    msg.style.backgroundColor="black";
};

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`you lost! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }

};

const playGame =(userChoice)=>{
    const compChoice=gencompchoice();

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin=false;
        if (userChoice === "rock"){
            //paper,scissors
            userWin= compChoice ==="paper" ? false:true;
        }else if (userChoice === "paper"){
            //rock,scissors
            userWin= compChoice ==="scissors" ? false:true;
        }else{
            //paper,rock
            userWin= compChoice ==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});

reset.addEventListener("click" ,()=>{
    userscore = 0;
    compscore = 0;

    userScorePara.innerText = userscore;
    compScorePara.innerText = compscore;
    msg.innerText = "Scores have been reset. Play again!";
    msg.style.backgroundColor = "blue";

});
    




