
const bouton = document.getElementById("counter");
let count = 0;

bouton.addEventListener("click", () => {

    count += 1;
    if (count === 1){
        bouton.innerText = `${count} clic!`;
    }
    else 
    bouton.innerText = `${count} clics!`;  
});