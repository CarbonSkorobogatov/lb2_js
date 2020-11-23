let target = document.querySelector('.right-side');
let block = document.querySelector('.slide');
let overlayer = document.querySelector('.overlayer');
let XPoint = null;
let Move = null;

EventLoop = {
    EventDown: function(event)
    {
        XPoint = event.clientX;

        target.addEventListener("mousemove", EventLoop.EventMove);
    },
    EventMove: function(event)
    {
        Move = event.clientX - XPoint;
        if(Move >= 200)
        {
            block.style.left = 0 + "px";
        }else if(Move > 0 && Move > -200){
            block.style.left = -200 + Move + "px";
        }else if(Move < -200){
            block.style.left = -200 + "px";
        }

        target.addEventListener("mouseup", EventLoop.EventUp);
    }, 
    EventUp: function(event)
    {
        if(Move >= 50){
            block.style.left = 0 + "px";
            overlayer.classList.add("overlayer-on");
        }else{
            block.style.left = -200 + "px";
            overlayer.classList.remove("overlayer-on");
        }

        XPoint = null;
        Move = null;

        target.addEventListener("mousedown", EventLoop.EventDown);
        target.removeEventListener("mousemove", EventLoop.EventMove);
 
    },
    EventClick: function(event)
    {
        target.addEventListener("mousedown", EventLoop.EventDown);
        target.addEventListener("mouseup", EventLoop.EventUp);
    }
}

target.addEventListener("click", EventLoop.EventClick());


