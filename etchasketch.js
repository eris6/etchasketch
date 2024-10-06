const container = document.querySelector(".container");
const resize = document.querySelector(".resize");
const clear = document.querySelector(".clear");
const playerbuttons = document.querySelector(".playerbuttons");
let dimension = 16;

playerbuttons.addEventListener('click', (event) => {
    let target = event.target;
    if (target.id == 'resizebutton'){
        let newSize = prompt("What size?");
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        if (newSize == 0) {
            createGrid(1);
        } else if (newSize > 0 && newSize < 100) {
            createGrid(newSize);
            dimension = newSize;
        } else {
            createGrid(100);
            dimension = 100;
        }
    }
    else if (target.id == 'clearbutton'){
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        createGrid(dimension);

    }
})

function createGrid(dimension){
    boxSize = getBoxSize(dimension);

    for (let i =0; i < dimension; i++){
        const row = document.createElement("div");
        container.appendChild(row);

        for (let j = 0; j < dimension; j++){
            const box = document.createElement("div");
            box.style.height=boxSize + "px";
            box.style.width=boxSize + "px";
            box.style.background="#F5A9B8";
            

            row.appendChild(box);
            
            box.classList.add("box");
            box.addEventListener('mouseover', (event)=>{
                if (box.style.background == "rgb(245, 169, 184)"){
                    box.style.background= getRandomColor();
                    box.style.filter = "brightness(100%)";
                    
                }
                else{
                    switch(box.style.filter){
                        case "brightness(100%)":
                            box.style.filter = "brightness(90%)";
                            break;
                        case "brightness(90%)":
                            box.style.filter = "brightness(80%)";
                            break; 
                        case "brightness(80%)":
                            box.style.filter = "brightness(70%)";
                            break;  
                        case "brightness(70%)":
                            box.style.filter = "brightness(60%)";
                            break;  
                        case "brightness(60%)":
                            box.style.filter = "brightness(50%)";
                            break;  
                        case "brightness(50%)":
                            box.style.filter = "brightness(40%)";
                            break;  
                        case "brightness(40%)":
                            box.style.filter = "brightness(30%)";
                            break;  
                        case "brightness(30%)":
                            box.style.filter = "brightness(20%)";
                            break; 
                        case "brightness(20%)":
                            box.style.filter = "brightness(10%)";
                            break;  
                        case "brightness(10%)":
                            box.style.filter = "brightness(0%)";
                            break;                      
                    }
                }
            })
        }
    }
}

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = "rgba" + "(" + red + " " + green + " " + blue + ")"
    return randomColor;
}


function getBoxSize(dimension){
    return 800/dimension - 2;
}

createGrid(dimension);




