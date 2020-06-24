// let guessNo = "2";
let guessNo = (Math.random())*10; // generating random number and multiply it by 10 
guessNo = Math.round(guessNo); // rounding up the decimal ramdom no 
let body = document.querySelector("body");
while(true){
    let num = Number(prompt("Guess number between 0 to 10"));
    if(num && num ==guessNo){
        body.style.backgroundColor = "yellow"
        body.style.color = "red"
        body.innerHTML = "<h1>YOU WIN</h1>"
        break;
    }
}