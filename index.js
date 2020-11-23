let X = null;
let block = document.querySelector('.navbar');
let Z;

window.addEventListener("mousedown", element =>{
    X = element.clientX;
})

window.addEventListener("mouseup", () => {
    X = null;
    if(Z > 150){
        block.style.left = 0 + "%";
    }if(Z < 150){
        block.style.left = -100 + "%";
    }
    Z = null;
    console.log(Z);
})

window.addEventListener("mousemove", element =>{
    if(X != null && X < element.clientX){
        
        Z = element.clientX - X; 
        if(Z < 100 && Z > 0){
            block.style.left = -100 + Z + "%";
        }
    }else if(X != null && X > element.clientX){
        block.style.left = -100 - Z + "%";
    }

    console.log(Z);
})



