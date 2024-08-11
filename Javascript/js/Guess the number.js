let random = Math.floor(Math.random()*101);
let input;
 input = Number.parseInt(input);
 let score = 100;
 while(input!= random){
    input = prompt("Guess the number")
    console.log(input)
    score = score - 1
    if(input == random){
        console.log(`congratulations you guessed correctly in ${100-score} chances and your score is${score}`)
        }
    
    else if(input>random && input<100){
        console.log("you guessed wrong, your value is greater than the number")

    }
    else  if(input < random && input>0){
        console.log("you guessed wrong, your value is lesser than the number")
    }
    else("lol")

}
    
