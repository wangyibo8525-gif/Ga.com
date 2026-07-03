[ ] const words = ["hello", "roblox", "speed", "coding", "javascript"];
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const scoreDisplay = document.getElementById("score");
let score = 0;

function nextWord() {
    wordDisplay.innerText = words[Math.floor(Math.random() * words.length)];
}

inputField.addEventListener("input", () => {
    if (inputField.value === wordDisplay.innerText) {
        score++;
        scoreDisplay.innerText = score;
        inputField.value = "";
        nextWord();
    }
});

nextWord(); // เริ่มเกม
[ ] 
