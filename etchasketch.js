const container = document.querySelector(".container");
for (let i =0; i < 16; i++){
    const row = document.createElement("div");
    container.appendChild(row);

    for (let j = 0; j < 16; j++){
        const box = document.createElement("div");
        row.appendChild(box);
        box.classList.add("box");
        box.addEventListener('mouseover', (event)=>{
            box.setAttribute("style", "background-color:#5BCEFA")
        })
    }
}

