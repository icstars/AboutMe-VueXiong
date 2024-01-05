function GuessNumber(){
    let ranNum = Math.floor(Math.random() * 100 + 1);
    var maxtries = 7;
    let userguess = prompt('choose a number between 1-100?')
    let targetnum = 81
    const Min = 1
    const Max = 100
    console.log(ranNum)
};
let targetnum = 81
let tries = 0;
let user1;
while (tries < 7) {
    user1 = prompt('guess a number between 1-100?')
    alert ('try again')
    if (user1 == targetnum) {
        alert ('winner')
    } else (user1 != targetnum); {
        alert ('pick another number')
    }
}
 