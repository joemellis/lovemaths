// wait for the DOM to finish loading before running the game
// Grt thr button elements and add event listeners 
document.addEventListener("DOMContentLoaded",function(){
    let buttons= document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener(click,function(){
            if (this,this.getAttribute("data-type") === "submit"){
                alert("you clicked submit")
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`)
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractionQuestion(){

}

function displayMultiplyQuestion(){

}