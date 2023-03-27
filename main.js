const input = document.querySelector("#tarea");
const inputDesc = document.querySelector("#message");
const addBtn = document.querySelector(".btn-add");
const section1 = document.querySelector("section1");
const empty = document.querySelector(".empty");
const taskCont = document.querySelector("#taskCont");
const inputColor = document.querySelector("#color")
const inputDate = document.querySelector("#date")
const inputTime = document.querySelector("#time")
const inputUrgencia = document.querySelector("#urgencia")

addBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    const text = input.value;
    const desc = inputDesc.value
    const color = inputColor.value
    const date = inputDate.value
    const time = inputTime.value
    const urgencia = inputUrgencia.value

    if(text !== ""){
        
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const div5 = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const h4= document.createElement("h4");
        const h5= document.createElement("h5");
        const li= document.createElement("li");
        const ul= document.createElement("ul");
        
        

        p1.textContent = desc;
        p2.textContent = date;
        p3.textContent = time;
        h4.textContent = text;
        h5.textContent = urgencia;
        
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        ul.appendChild(li);
        div4.appendChild(ul);
        
        div3.appendChild(h4);
        div2.appendChild(div3);
        div2.appendChild(div4);
        taskCont.appendChild(div2);
        div5.appendChild(h5);
        div2.appendChild(div5);
        div2.appendChild(addDeleteBtn());

        console.log(urgencia)
        if(urgencia== "Alta"){
            div5.style.backgroundColor= 'red';
        
        }
        else if (urgencia=="Media") {
            div5.style.backgroundColor= "#FFFF00";
        } else {
            div5.style.backgroundColor= "#0000FF";
        }

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