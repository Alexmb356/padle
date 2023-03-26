const input = document.querySelector("#tarea");
const inputDesc = document.querySelector("#message");
const addBtn = document.querySelector(".btn-add");
const section1 = document.querySelector("section1");
const empty = document.querySelector(".empty");
const taskCont = document.querySelector("#taskCont");
const inputColor = document.querySelector("#color")
const inputDate = document.querySelector("#date")

addBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    const text = input.value;
    const desc = inputDesc.value
    const color = inputColor.value
    const date = inputDate.value

    if(text !== ""){
        
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const h4= document.createElement("h4");
        const li= document.createElement("li");
        const ul= document.createElement("ul");
        
        

        p1.textContent = desc;
        p2.textContent = date;
        h4.textContent = text;
        
        li.appendChild(p1);
        li.appendChild(p2);
        ul.appendChild(li);
        div4.appendChild(ul);
        
        div3.appendChild(h4);
        div2.appendChild(div3);
        div2.appendChild(div4);
        taskCont.appendChild(div2);
        div2.appendChild(addDeleteBtn());

        p1.className= "card-text"
        p2.className= "card-text"
        h4.className="my-0 fw-normal"
        div3.className= "card-header p-1"
        div4.className= "card-body p-1 m-1"
        div2.className= "card border border-light"
        div2.setAttribute("id","box")
        div4.setAttribute("id","cardBody")
        div2.style.backgroundColor= color;
        input.value= "";
        inputDesc.value="";
        empty.style.display = "none";
        

    }

});



function addDeleteBtn() {

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e)=>{
        
        const item = e.target.parentElement;
        taskCont.removeChild(item)
        console.log(item) // ulTareas
        

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
          empty.style.display = "block";
          
        }
    });
    
    return deleteBtn;  

    

};