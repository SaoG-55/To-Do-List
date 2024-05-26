let inputs=document.getElementById("input");
let text=document.querySelector(".card-text");

function Add()
{
    if(inputs.value==="")
        {
            alert("Please enter some text");
        }
    else
    {
        let newEle=document.createElement("li");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",function remove(){
            newEle.remove();
        });
    }
}