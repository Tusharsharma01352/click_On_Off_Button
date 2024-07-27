let body = document.body;

let image = document.createElement("img");

image.setAttribute("src", "./Bulb-OFF.jpeg");
image.style.height="500px";
image.style.width="500px";

console.log(image);
body.appendChild(image);

let button = document.createElement("button");
button.innerHTML ="ON";
console.log(button);

body.appendChild(button);

button.addEventListener("click",()=>{
    if(button.innerHTML=="ON"){
        image.setAttribute("src","./IMG/lightbulb-ON.png");
        image.style.height="520px"; 
        image.style.width="380px";

        button.innerHTML="OFF";
    }
    else{

        image.setAttribute("src","./IMG/lightbulb-OFF.png");
        image.style.height="500px";
        image.style.width="500px";
        button.innerHTML="ON";

    }
});




