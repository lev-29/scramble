const wordText = document.querySelector(".word") 
const hintText = document.querySelector(".hint")
const timeText = document.querySelector(".time b") //timer
const inputField = document.querySelector("input") //user input
const refreshBtn = document.querySelector(".refresh") 
const submitBtn = document.querySelector(".submit")

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Oops! Time Out! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj=word[Math.floor(Math.random() * word.length)];
    let wordArray=randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; //swapping
    }
    wordText.innerText = wordArray.join(""); //jumbled words
    hintText.innerText = randomObj.hint; // hints for words

    //correct word converted in lowercase to match the input from user
    correctWord = randomObj.word.toLowerCase(); 

    //set field value to empty
    inputField.value = "";
}

initGame(); //call the function

//function to check the input from user
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord){
        return alert("Please Enter a word"); //if user leaves a blank
    }

    if(userWord != correctWord){
        return alert(`Oops! ${userWord} is not the correct word`); //if the word is incorrect
    }
    else if(userWord == correctWord){
        initGame();
        return alert(`Congrats! ${userWord.toUpperCase()} is the correct word`); //if the word is correct
    }
}

refreshBtn.addEventListener("click", initGame); //listener for refresh button
submitBtn.addEventListener("click", checkWord); //listener for submit button
