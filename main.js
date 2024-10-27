const diagramInput = document.querySelector(".diagram-input");
let diagramTxt = document.querySelector(".diagram-txt");
const changeBtn = document.querySelector(".change-title-btn");

function checkChangeTitle() {
    if(diagramInput != " ") {
        changeTitle();
    } else {
        console.log("nie")
    }
}

function changeTitle() {
        diagramTxt.innerHTML = diagramInput.value;
        diagramInput.value = diagramInput.innerHTML = " ";
}

changeBtn.addEventListener("click", checkChangeTitle);