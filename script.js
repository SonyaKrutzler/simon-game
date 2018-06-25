
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

const SEQUENCE = [];
let COUNTER = 0;

startButton.addEventListener("click", () => {
    SEQUENCE.push(randomNumber(1, 4));
    display(SEQUENCE);
});


const display = (arr) => {
    // loop through the array
    for (let i=0;i<arr.length;i++){
        setTimeout(()=>{lightUp(arr[i])},2000*i);

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
    setTimeout(() => {lightOff(num)}, 1500);
    audio.play();
}

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


/*[1, 3, 2, 4, 1, 2, ]
function lightUp(arr)
for (i = 1; i < arr.length; i++) {
    let x=0;
    x!==arr[i]; {
    
    arr.push(arr[i])
    }
} */

// user interface

const colourButtons = document.getElementsByClassName('colour');


for (let i = 0; i < colourButtons.length; i++) {
    
    colourButtons[i].addEventListener("click", function () {
        if (SEQUENCE[COUNTER]==colourButtons[i].value) {
            (COUNTER =COUNTER+1);
        
         if   (COUNTER===SEQUENCE.length) {
                (COUNTER = 0);
                // automatically start the next pattern  
            }
        }
        else {
    
            console.log (alert('Failure!'));
            this.fail.play();
            
       
            // restart the game 
            // SEQUENCE = []
            // COUNTER = 0

        }
    }
    );
}

const clearCounter = () => {
    document.querySelector('COUNTER') = 0;
}

function win(){
    var audio = document.getElementById("audio");
    audio.win();
              }

/*function Sound(){
    mySound = new sound ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
}    
*/
            
function fail(src) {
    this.fail = document.createElement("audio2");
    this.fail.src = src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
    document.body.appendChild(this.fail);
    //this.play = function(){
        this.fail.play();
    //};
}


