
// random number 1-4
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max - min +1)) + min;
}
  
randomNumber(1, 4);


//random number lights up
document.querySelector(".start");
let startButton = document.querySelector(".start");


let simonGame = {
    SEQUENCE :[],
    COUNTER :0,
    score :0,
};

//Start button - pushes random number to sequence
startButton.addEventListener("click", () => {
    simonGame.SEQUENCE.push(randomNumber(1, 4));
    display(simonGame.SEQUENCE);
    disable(); 
        
});


//Restart button - clears game
document.querySelector(".restart");
let restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", () => {
    restart();
})

//displays lights
const display = (arr) => {
    for (let i=0;i<arr.length;i++){
        setTimeout(()=>{lightUp(arr[i])},1000*i);

    }
    
}

const lightUp = (num) => {
    
    let element = document.getElementById('button-' + num);
    element.classList.add('btn-selected');
    setTimeout(() => {lightOff(num)}, 500);
    buttonSound(num);
}
    
//Sound Effects!
const buttonSound=(num)=>{
    if (num===1){
    playSound("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    }
    else if (num===2){
    playSound("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    }
    else if (num===3){
    playSound("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    }
    else {
    playSound("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    }
};
    
//Turns lights off
const lightOff = (num) => {
    let element = document.getElementById('button-' + num);
    element.classList.remove('btn-selected');

}

//Pushes selected buttons into array
const getButtons = () => {
    var listarray = new Array();
    var select = document.getElementsByClassName('btn-selected');
    for (var i = 0; i < select.length; i++) {
        listarray.push(select[i].value);

    };
}

// User - when click...
const colourButtons = document.getElementsByClassName('colour');

for (let i = 0; i < colourButtons.length; i++) {
    
    colourButtons[i].addEventListener("click", function () {
        if (simonGame.SEQUENCE[simonGame.COUNTER]==colourButtons[i].value) {
            (simonGame.COUNTER =simonGame.COUNTER+1);
        
         if   (simonGame.COUNTER===simonGame.SEQUENCE.length) {
                (simonGame.COUNTER = 0);

                setTimeout(function() {
                    simonGame.SEQUENCE.push(randomNumber(1, 4));
                    display(simonGame.SEQUENCE);
                    changeScore( simonGame.score +1);
                }, 500);



            }
        }
        else {
    
            playSound("Wrong-answer-sound-effect.mp3");
            restart();
            enable();
            changeScore(0);


        }
    }
    );
}

//RESTART
const restart = () => {
    simonGame.SEQUENCE = [];
    clearCounter();
    changeScore(0);
    enable();
}

//Clears counter
const clearCounter = () => {
    simonGame.COUNTER = 0;
}

//Play sound - audio
function playSound(audio){
    const mySound = new sound (audio);
    mySound.play();
}    
            
function sound(src) {
    this.sound = document.getElementById("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

// disbable start button
function disable() {
    document.querySelector(".start").disabled = true;
}

// enable start button
function enable() {
    document.querySelector(".start").disabled = false;
}

//Change Score - add one and clear
const changeScore = (newScore) => {
    document.getElementById("myButton1").value=newScore;
    simonGame.score = newScore;
}

 

