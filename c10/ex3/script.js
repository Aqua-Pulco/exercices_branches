const tmp = -5; 

function howIsIt(temp) {
    if (temp < 0)   
        return ("Freezing weather.");
    else if (temp < 10)  
        return ("Very cold weather.");
    else if (temp < 20)  
        return ("Cold weather.");
    else if (temp < 30)  
        return ("Normal in temp."); 
    else if (temp < 40)   
        return ("Its Hot."); 
    else  
        return ("Its very hot.");
    }
    console.log(howIsIt(tmp));