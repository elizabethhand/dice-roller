let userCounter=0
let computerCounter=0
let user=0
let computer=0

//loop 5 times
for (let i=0; i<= 5; i++){

//generate random numbers between 1-6
user= Math.floor(Math.random() * 6) + 1  
computer= Math.floor(Math.random() * 6) + 1 

//if user higher than computer, increment counter
if (user>computer){
    userCounter++

}

//if computer high than computers, increment counter
else if (computer>user){
    computerCounter++

}
//skip iteration if draw
else{
    continue
}
}

console.log(computerCounter)
console.log(userCounter)


if (computerCounter> userCounter){
    console.log("Computer Wins")
}
else if(userCounter>computerCounter){
    console.log("User wins")
}
else{
    console.log("Draw")
}


