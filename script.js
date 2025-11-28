
const redBox = document.getElementById("redBox");
const greenBox = document.getElementById("greenBox");
const blueBox = document.getElementById("blueBox");
const yellowBox = document.getElementById("yellowBox");

let gameStarted = false;

function randomNum() {
    return Math.floor(Math.random() * 6) + 1; 
}

function Boxes() {
    const boxes = [redBox, greenBox, blueBox, yellowBox];

    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            if (gameStarted) box.textContent = randomNum();
        });
    });
}
document.getElementById("startBtn").addEventListener("click", () => {
    gameStarted = true;
    alert("Game Started!");
});

document.getElementById("resetBtn").addEventListener("click", () => {
    redBox.textContent = "0";
    greenBox.textContent = "0";
    blueBox.textContent = "0";
    yellowBox.textContent = "0";
    gameStarted = false;
    alert("Game Reset!");
});

document.getElementById("exitBtn").addEventListener("click", () => {
    alert("Thanks for playing!");
    window.location.href = "https://google.com"; 
});

Boxes();
