let Z = null;
let X = null;
let block = document.querySelector('.navbar');


window.addEventListener("mousedown", element =>{
    X = element.clientX;
})

window.addEventListener("mouseup", () => {
    if(Z > 150){
        block.style.left = 0 + "%";
        Overlayer.Add();
    }if(Z < 150){
        block.style.left = -100 + "%";
        Overlayer.Remove();
    }
    Z = null;
    X = null;
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

})

Overlayer = {
    Add: function Add(){
        document.querySelector('.overlayer').classList.add("overlayer-on");
        console.log(1)
    }, 
    Remove: function Remove(){
        document.querySelector('.overlayer').classList.remove("overlayer-on");
        console.log(2)
    }
}




