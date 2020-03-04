const descriptorWords = [" Problem Solver ", " Developer ", " Creator ", " Tinkerer ", " Dreamer "]
let currentWords = descriptorWords;

const redButton = document.querySelector("#generatorButton");
const genText = document.querySelector("#genText");

let wordCounter = 0;



let  replaceText = () =>{
    let currentWord = genText.innerHTML;
    wordCounter++;

    if(wordCounter > currentWords.length-1){
        wordCounter = 0;
    }
    

    
    genText.innerHTML = currentWords[wordCounter];
};

redButton.onclick = replaceText;