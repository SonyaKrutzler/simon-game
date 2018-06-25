
//what can we do??

//need a set of buttons (4)
//need on and off button (switch)
// - can make toggle switch button for on/off
// need counter? Keeps track of turns

// need to randomly select number



//switch button on -> counter starts at 01 
//a random number is selected -> corresponsds to button
//button lights up -> fades out -> corresponding number pushed to an array
// WAITS
//player then presses a button -> if button matches same in array -> counter increased/new number selected
// if NOT -> same number from array is selected -> button lights up again -> counter stays same



math.floor(math.random() * 4) + 1;

// random number from 1 - 4  we'll need this later!


//CANVAS

<canvas id="myCanvas" width="1000" height="900">
</canvas>

// circle

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(500, 300, 230, 0, 42 * Math.PI);
//<-> placement, up down placement, size //
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(500, 300, 260, 50, 42 * Math.PI);
ctx.stroke();


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(500, 300, 130, 0, 42 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(500, 300, 110, 0, 42 * Math.PI);
ctx.stroke();


// text

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.fillText("Simon", 430, 280);



//



// old one


document.getElementsByClassName('start').addEventListener("click", function () {
    lightUp(randomNumber(1, 4));
    
})




document.querySelector('.start').addEventListener("click", function () {
    lightUp(randomNumber(1, 4));
    
})


//

function setColor() {
    var x = document.querySelector('.btn-selected');
    x.style.background = x.style.background == "yellow" ? "pink" : "yellow";
  }

 // BROKEN GRID ---->

 <div class="grid-container">
        <div class="grid-item">
            <button type="button" id="button-1" class="colour btn btn-primary btn-lg"></button>
        </div>
        <div class="grid-item">
            <button type="button" id="button-2" class="colour btn btn-success btn-lg"></button>
        </div>
        <div class="grid-item">
            <button type="button" id="button-3" class="colour btn btn-danger btn-lg"></button>
        </div>
        <div class="grid-item">
            <button type="button" id="button-4" class="colour btn btn-warning btn-lg"></button>
        </div>
    </div>

/*   .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        background-color: #403f3f;
        padding: 10px;
      }
      .grid-item {
        background-color: rgba(21, 12, 12, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
      }
*/
//    <-------


// ATTEMPTED PUSH ARRAY FUNCTION

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max - min +1)) + min;
}


const makeArray = () => {
  var listArray = new Array ();
  listArray.push(arr[i].randomNumber(1, 4));
}

makeArray(3);

//make array global - no parameters

------------------------------------

const lightUp = (num) => {
    
    let element = document.getElementById('button-' + num);
    element.classList.add('.btn-selected');
    // turn off in 1.5 seconds
    setTimeout(() => {lightOff(num)}, 1500);
}

const lightOff = (num) => {
    //console.log('IM TURNING OFF');
    let element = document.getElementById('button-' + num);
    element.classList.remove('.btn-selected');

}



///


const clearResults = () => {
    document.getElementById("results").innerHTML = "";
}
 
const displayText = (text) => {
    const textElem = document.createElement("p");
    textElem.classList.add("text-center");
    textElem.classList.add("empty-results");
    textElem.textContent = text;
    document.getElementById("results").appendChild(textElem);
}
