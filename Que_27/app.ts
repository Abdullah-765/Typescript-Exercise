// Alien Colors #3

const green: number = 5;
const red: number = 15;
const yellow: number = 10;



function alienColor(color:"red"|"yellow"|"green"){

    if(color === `green`){
        console.log(`You earned ${green} points`);

    }else if(color === `red`){
        console.log(`You earned ${red} points`); 



    }else if(color === "yellow"){
        console.log(`You earned ${yellow} points`); 
    }
}

alienColor("red")


