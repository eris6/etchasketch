function createGrid(dimension){
    boxSize = getBoxSize(dimension);
    const container = document.querySelector(".container");
    for (let i =0; i < dimension; i++){
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < dimension; j++){
            const box = document.createElement("div");
            box.style.height=boxSize + "px";
            box.style.width=boxSize + "px";
            box.style.padding="0";
            row.appendChild(box);
            
            box.classList.add("box");
            box.addEventListener('mouseover', (event)=>{
                box.style.background="#5BCEFA"
            })
        }
    }
}

function getBoxSize(dimension){
    return 800/dimension - 2;
}


createGrid(16);


