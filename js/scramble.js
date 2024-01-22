const wordText = document.querySelector(".word")

const initGame = () => {
    let randomObj=word[Math.floor(Math.random() * word.length)];
    let wordArray=randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    console.log(randomObj);
}

initGame();
