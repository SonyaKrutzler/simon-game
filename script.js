
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

let SEQUENCE = [];
let COUNTER = 0;
let score = 0;

startButton.addEventListener("click", () => {
    SEQUENCE.push(randomNumber(1, 4));
    display(SEQUENCE);
    disable(); 
        
});

document.querySelector(".restart");
let restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", () => {
    restart();
})


const display = (arr) => {
    // loop through the array
    for (let i=0;i<arr.length;i++){
        setTimeout(()=>{lightUp(arr[i])},1000*i);

    }
    // example array = [1, 3, 3, 1]
    // this function will call lightUp(1) in 0 seconds
    // then call lightUp(3) in 2 seconds 
    // then call lightUp(3) in 4 seconds 
    // then call lightUp(1) in 6 seconds 

}


var delayInMilliseconds=2000;
setTimeout(function(){
    //lightUp(randomNumber(1, 4));
} ,delayInMilliseconds

);

const lightUp = (num) => {
    
    let element = document.getElementById('button-' + num);
    element.classList.add('btn-selected');
    // turn off in 1.5 seconds
    setTimeout(() => {lightOff(num)}, 500);
    buttonSound(num);
}
    

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
    

const lightOff = (num) => {
    //console.log('IM TURNING OFF');
    let element = document.getElementById('button-' + num);
    element.classList.remove('btn-selected');

}



const getButtons = () => {
    var listarray = new Array();
    var select = document.getElementsByClassName('btn-selected');
    for (var i = 0; i < select.length; i++) {
        listarray.push(select[i].value);

    };
}



const colourButtons = document.getElementsByClassName('colour');


for (let i = 0; i < colourButtons.length; i++) {
    
    colourButtons[i].addEventListener("click", function () {
        if (SEQUENCE[COUNTER]==colourButtons[i].value) {
            (COUNTER =COUNTER+1);
        
         if   (COUNTER===SEQUENCE.length) {
                (COUNTER = 0);

                // automatically start the next pattern
                setTimeout(function() {
                    SEQUENCE.push(randomNumber(1, 4));
                    display(SEQUENCE);
                    (score = score +1); 
                    //showScore();
                    calculateScore();
                }, 500);



            }
        }
        else {
    
            // console.log (alert('Failure!'));
            playSound("Wrong-answer-sound-effect.mp3");
            //setTimeout(() => {restart(num)}, 1500);
            //document.location.reload();
            restart();
            enable();
            clearScore();
            
       
            // restart the game 
            // SEQUENCE = []
            // COUNTER = 0

        }
    }
    );
}


const restart = () => {
    SEQUENCE = [];
    clearCounter();
    clearScore();
    enable();
}

const clearCounter = () => {
    COUNTER = 0;
}

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


function disable() {
    document.querySelector(".start").disabled = true;
}

function enable() {
    document.querySelector(".start").disabled = false;
}


const calculateScore = () => {
    document.getElementById("myButton1").value=score;

}

const clearScore = () => {
    document.getElementById("myButton1").value=0;
    score = 0;
}

 

