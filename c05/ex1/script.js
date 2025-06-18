const suscribeButton = document.getElementById("newsletter");
const image = document.getElementById("img");
const txt = document.querySelector("h1");
console.log("hellooo, ca va ?");

let buttonState = false;
image.style.display = "none";

suscribeButton.addEventListener("click", () => {
    if (buttonState===false){
        image.style.display = "block";
        txt.style.display = "none";
        buttonState = true;
    }
    else if (buttonState===true){
        image.style.display = "none";
        txt.style.display = "block";
        buttonState = false;
    }

})

