let users=0;
let comps=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userSP=document.querySelector("#user-s");
const compSP=document.querySelector("#comp-s");
const getCompChoice=()=>{
    const options=["stones","paper","scirrors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw.Play Again";
    msg.style.backgroundColor="blue";
    msg.style.color="white";
}

const showWinner=(userWin)=>{
    if(userWin){
        users++;
        userSP.innerText=users;
        msg.innerText="You win!";
        msg.style.color="white";
        msg.style.backgroundColor="green";
        // console.log("You win!");
        // msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
    }else{
        comps++;
        compSP.innerText=comps;
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
        msg.style.color="white";
        // console.log("You lose!"); 
        // msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
    }
}


const playgame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice=getCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="stones"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scirrors"?false:true;
        }else{
           userWin= compChoice==="stones"?false:true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    });
});