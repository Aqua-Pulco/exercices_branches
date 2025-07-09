const tmp = -5; 


switch (true) {
    case (tmp < 0):
        console.log("Freezing weather.");
        break;
    case (tmp < 10):
            console.log("Very cold weather.");
        break;
    case (tmp < 20):
        console.log("Cold weather.");
        break;
    case (tmp < 30):
        console.log("Normal in temp.");
        break;
     case (tmp < 40):
        console.log("it's hot");
        break;
    default:
        console.log("we all gonna die");
        break;
}


// function howIsIt(temp) {
//     if (temp < 0)   
//         return ("Freezing weather.");
//     else if (temp < 10)  
//         return ("Very cold weather.");
//     else if (temp < 20)  
//         return ("Cold weather.");
//     else if (temp < 30)  
//         return ("Normal in temp."); 
//     else if (temp < 40)   
//         return ("Its Hot."); 
//     else  
//         return ("Its very hot.");
//     }
//     console.log(howIsIt(tmp));
// 

