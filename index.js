let X = null;
let block = document.querySelector('.navbar');

window.addEventListener("mousedown", element =>{
    X = element.clientX;
    console.log("do");
})

window.addEventListener("mouseup", () => {
    X = null;
    console.log("end");
})

window.addEventListener("mousemove", element =>{
    if(X != null && X < element.clientX){
        
        block.style.left = 0 + "%";

        console.log(element.clientX)
    }else if(X != null && X > element.clientX){
        block.style.left = -100 + "%";
    }
})



