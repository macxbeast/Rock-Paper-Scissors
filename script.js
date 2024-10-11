let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options=["rock","paper","scissors"];
    let ind=Math.floor(Math.random()*3);
    return options[ind];
};

const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText="You Win";
        uScore.innerText=++userScore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText="You Lose";
        cScore.innerText=++compScore;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        msg.innerText="Draw";
        msg.style.backgroundColor="black";
    }
    else{
        userWin=true;
        if(userChoice==="rock"){
            userWin=(compChoice==="scissors")?true:false;
        }
        else if(userChoice==="scissors"){
            userWin=(compChoice==="rock")?false:true;
        }
        else{
            userWin=(compChoice==="rock")?true:false;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
