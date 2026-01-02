// Guess number game

let num_to_guess = 23

do{
    let gussed_num = prompt("Enter a value : ") 
    if(num_to_guess == gussed_num){
        alert("Correct number...")
        break
    }else{
        alert("Wrong number!!!")
    }
}while(true)