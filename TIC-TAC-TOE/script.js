let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn_O=true;  //    Player_X, Player_O

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn_O=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>
    {
        box.addEventListener("click",()=>
        {
            console.log("Box Clicked!")
            if(turn_O)
                {
                    box.innerText="O";
                    turn_O=false
                    
                }
            else
            {
                box.innerText="X";
                turn_O=true
            }
            box.disabled=true;
            checkWinner();
        });
    });

    const disableBoxes=()=>{
         for(let box of boxes)
            {
                box.disabled=true;
            }
    }

    const enableBoxes=()=>{
        for(let box of boxes)
           {
               box.disabled=false;
               box.innerText="";
           }
   }

    const showWinner=(winner)=>{
        msg.innerText=`Congratulations! Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

const checkWinner=()=>{
    for(let pattern of winPatterns)
        {
            let p1_val= boxes[pattern[0]].innerText;
            let p2_val= boxes[pattern[1]].innerText;
            let p3_val= boxes[pattern[2]].innerText;

            if(p1_val!="" && p2_val!="" && p3_val!="")
                {
                    if(p1_val===p2_val && p2_val===p3_val)
                        {
                            console.log("winner",p1_val);
                            showWinner(p1_val);
                        }
                }
        };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);